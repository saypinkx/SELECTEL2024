import { action, makeObservable, observable, runInAction } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { AuthService } from '../../services';
import { DateFieldProps } from '@gravity-ui/date-components';
import { type City, RegionsApi, GenderEnum, BlankEnum } from '../../shared/api';
import { dateTimeParse } from '@gravity-ui/date-utils';

type DateTime = DateFieldProps['value'];

@Service({ transient: true })
export class ProfilePageViewModel extends ViewModel {
    auth = Container.get(AuthService);
    regionsApi = Container.get(RegionsApi);

    @observable hasChanges = false;
    @observable name = this.auth.userInfo?.first_name || '';
    @observable surname = this.auth.userInfo?.last_name || '';
    @observable patronymic = this.auth.userInfo?.middle_name || '';
    @observable about = this.auth.userInfo?.about || '';
    @observable gender: GenderEnum | BlankEnum = this.auth.userInfo?.gender || BlankEnum.Value;
    @observable city?: City = this.auth.userInfo?.city || undefined;
    @observable cities: City[] = [];
    @observable birthday?: DateTime = this.auth.userInfo?.birth_date
        ? (dateTimeParse(this.auth.userInfo?.birth_date) as DateTime)
        : undefined;

    constructor() {
        super();
        makeObservable(this);

        this.reaction(
            () => this.hasChanges,
            () => (this.hasChanges ? this.showSaveButton() : this.hideSaveButton()),
        );

        this.getCountriesList();
    }

    showSaveButton = () => {
        Telegram.WebApp.MainButton.setParams({
            is_visible: true,
            color: '#27C175',
            text_color: '#000',
            text: 'Сохранить изменения',
        });
        Telegram.WebApp.onEvent('mainButtonClicked', this.saveChanges);
    };

    hideSaveButton = () => {
        Telegram.WebApp.MainButton.hide();
        Telegram.WebApp.offEvent('mainButtonClicked', this.saveChanges);
    };

    @action setAbout = (value: string) => {
        this.about = value;
        this.hasChanges = true;
    };

    @action setName = (value: string) => {
        this.name = value;
        this.hasChanges = true;
    };

    @action setSurname = (value: string) => {
        this.surname = value;
        this.hasChanges = true;
    };

    @action setPatronymic = (value: string) => {
        this.patronymic = value;
        this.hasChanges = true;
    };

    @action setBirthday = (value: DateTime) => {
        this.birthday = value;
        this.hasChanges = true;
    };

    @action setGender = (value: GenderEnum) => {
        this.gender = value;
        this.hasChanges = true;
    };

    @action setCity = (value: number) => {
        this.city = this.cities.find(city => city.id === value);
        this.hasChanges = true;
    };

    @action saveChanges = () => {
        this.hasChanges = false;
        const user = this.auth.userInfo;
        if (!user) return;

        if (this.city) {
            user.city = this.city;
        }
        user.first_name = this.name;
        user.last_name = this.surname;
        user.middle_name = this.patronymic;
        user.birth_date = this.birthday?.toISOString();
        user.gender = this.gender;
        user.about = this.about;

        this.auth.setUserInfo(user);

        Telegram.WebApp.showAlert('Изменения сохранены');
    };

    @action getCountriesList = () => {
        this.regionsApi.citiesList({ page_size: 1000 }).then(({ results = [] }) => {
            runInAction(() => {
                this.cities = results;
            });
        });
    };
}
