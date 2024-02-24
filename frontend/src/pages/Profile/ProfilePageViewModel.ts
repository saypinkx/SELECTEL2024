import { action, makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { AuthService } from '../../services';
import { DateFieldProps } from '@gravity-ui/date-components';

type Gender = 'male' | 'female';
type DateTime = DateFieldProps['value'];

@Service({ transient: true })
export class ProfilePageViewModel extends ViewModel {
    @observable name = '';
    @observable surname = '';
    @observable patronymic = '';
    @observable birthday?: DateTime;
    @observable gender?: Gender;
    @observable hasChanges = false;

    constructor(public auth: AuthService) {
        super();
        makeObservable(this);
        this.auth = Container.get(AuthService);

        this.reaction(
            () => this.hasChanges,
            () => {
                if (this.hasChanges) {
                    Telegram.WebApp.MainButton.setParams({
                        is_visible: true,
                        color: '#27C175',
                        text_color: '#000',
                        text: 'Сохранить изменения',
                    });
                    Telegram.WebApp.onEvent('mainButtonClicked', this.saveChanges);
                } else {
                    Telegram.WebApp.MainButton.hide();
                    Telegram.WebApp.offEvent('mainButtonClicked', this.saveChanges);
                }
            },
        );
    }

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

    @action setGender = (value: Gender) => {
        this.gender = value;
        this.hasChanges = true;
    };

    @action saveChanges = () => {
        this.hasChanges = false;
    };
}
