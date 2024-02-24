import { action, computed, makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { AuthService } from '../../../services';
import { AuthenticationApi, isApiError } from '../../../shared/api';

@Service({ transient: true })
export class LoginViewModel extends ViewModel {
    @observable login = '';
    @observable password = '';

    @observable loginError = '';
    @observable passwordError = '';

    @observable isLoading = false;

    @computed get hasErrors() {
        return [this.loginError, this.passwordError].some(Boolean);
    }

    constructor(
        private auth: AuthService,
        private authApi: AuthenticationApi,
    ) {
        super();
        makeObservable(this);
        this.auth = Container.get(AuthService);
        this.authApi = Container.get(AuthenticationApi);
    }

    @action onChangeLogin = (value: string) => {
        this.login = value;
        this.loginError = '';
        this.passwordError = '';
    };

    @action onChangePassword = (value: string) => {
        this.password = value;
        this.loginError = '';
        this.passwordError = '';
    };

    @action onLogin = async () => {
        this.isLoading = true;
        try {
            const user = await this.authApi.authLoginCreate({
                username: this.login,
                password: this.password,
            });
            this.auth.setUserInfo(user);
            Telegram.WebApp.showAlert('Пользователь успешно авторизован', () => {
                Telegram.WebApp.close();
            });
        } catch (error) {
            if (isApiError<'message'>(error)) {
                this.loginError = error.response?.data.message ?? '';
                this.passwordError = error.response?.data.message ?? '';
            }
        } finally {
            this.isLoading = false;
        }
    };
}
