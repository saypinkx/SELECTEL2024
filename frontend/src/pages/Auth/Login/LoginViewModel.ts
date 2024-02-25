import { action, computed, makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { AuthService, MetaUser, RouterService } from '../../../services';
import { ApiApi, AuthenticationApi, isApiError } from '../../../shared/api';

@Service({ transient: true })
export class LoginViewModel extends ViewModel {
    private api = Container.get(ApiApi);
    private auth = Container.get(AuthService);
    private authApi = Container.get(AuthenticationApi);
    private routes = Container.get(RouterService);

    @observable login = '';
    @observable password = '';

    @observable loginError = '';
    @observable passwordError = '';

    @observable isLoading = false;

    @computed get hasErrors() {
        return [this.loginError, this.passwordError].some(Boolean);
    }

    constructor() {
        super();
        makeObservable(this);
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

    @action metaLogin = async (): Promise<MetaUser['meta'] | undefined> => {
        return this.api
            .loginApiUsersLoginPost({
                firstname: this.login,
                password: this.password,
            })
            .then((id: number) => this.api.getUserApiUsersUserIdGet(id))
            .catch(() => {
                this.api
                    .createUserApiUsersPost({
                        email: '',
                        password: this.password,
                        firstname: this.login,
                        lastname: '',
                        patronym: '',
                        tag: '',
                    })
                    .then(() =>
                        this.api.loginApiUsersLoginPost({
                            firstname: this.login,
                            password: this.password,
                        }),
                    )
                    .then((id: number) => this.api.getUserApiUsersUserIdGet(id))
                    .catch(() => {
                        return undefined;
                    });
            });
    };

    @action onLogin = async () => {
        this.isLoading = true;
        try {
            const user: MetaUser = await this.authApi.authLoginCreate({
                username: this.login,
                password: this.password,
            });

            user.meta = await this.metaLogin();
            this.auth.setUserInfo(user);
            this.routes.router?.navigate('/profile');
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
