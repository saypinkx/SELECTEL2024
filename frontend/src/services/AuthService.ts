import { computed, makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { AuthenticationApi, User, isApiError } from '../shared/api';
import { Toaster } from '@gravity-ui/uikit';

@Service()
export class AuthService {
    @observable.ref userInfo: User | null = null;

    @computed get userIsAuthenticated() {
        return !!this.userInfo;
    }

    constructor(
        private authApi: AuthenticationApi,
        private toaster: Toaster,
    ) {
        makeObservable(this);
        this.toaster = new Toaster();
        this.authApi = Container.get(AuthenticationApi);
    }

    public login = async (username: string, password: string) => {
        try {
            this.userInfo = await this.authApi.authLoginCreate({ username, password });
        } catch (error) {
            if (isApiError(error)) {
                this.toaster.add({
                    name: 'loginError',
                    theme: 'danger',
                    isClosable: true,
                    title: 'Ошибка входа',
                    content: error.response?.data.message,
                });
            }
        }
    };

    public logout = async () => {
        this.userInfo = null;
    };
}
