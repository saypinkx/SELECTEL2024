import { ViewModel } from '@yoskutik/react-vvm';
import { action, makeObservable, observable, runInAction } from 'mobx';
import Container, { Service } from 'typedi';
import { AuthService } from '../../services';
import { ApiApi } from '../../shared/api';

@Service()
export class ChangePasswordViewModel extends ViewModel {
    authService = Container.get(AuthService);
    api = Container.get(ApiApi);

    @observable oldPassword = '';
    @observable newPassword = '';

    constructor() {
        super();
        makeObservable(this);

        this.reaction(
            () => this.newPassword && this.oldPassword,
            hasValue =>
                hasValue ? Telegram.WebApp.MainButton.show() : Telegram.WebApp.MainButton.hide(),
        );
    }

    @action setNewPassword = (value: string) => {
        this.newPassword = value;
    };

    @action setOldPassword = (value: string) => {
        this.oldPassword = value;
    };

    saveNewPassword = async () => {
        const user = this.authService.userInfo;
        if (!user) return;
        this.api.updateUserApiUsersUserIdPut(user.id, {
            new_email: user.email,
            new_password: this.newPassword,
            new_firstname: user.first_name,
            new_lastname: user.last_name ?? '',
            new_patronym: user.middle_name ?? '',
            new_tag: '',
        });

        Telegram.WebApp.showAlert('Пароль обновлен');
        runInAction(() => {
            this.newPassword = '';
            this.oldPassword = '';
        });
    };
}
