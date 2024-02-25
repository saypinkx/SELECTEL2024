import { computed, makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { ApiApi, User } from '../shared/api';
import { RouterService } from './RouterService';

export type MetaUser = User & {
    meta?: {
        id: number;
        password: string;
        firstname: string;
        lastname: string;
        email: string;
        patronym: string;
        tag: string;
    };
};

@Service()
export class AuthService {
    private api = Container.get(ApiApi);

    @observable.ref userInfo: MetaUser | null = null;

    @computed get userIsAuthenticated() {
        return !!this.userInfo;
    }

    constructor(private routes: RouterService) {
        makeObservable(this);
        this.routes = Container.get(RouterService);

        try {
            const user = JSON.parse(localStorage.getItem('user') || 'null');
            if (user) {
                this.setUserInfo(user);
            } else {
                this.logout();
            }
        } catch {
            this.logout();
        }
    }

    public setUserInfo = (user: User) => {
        this.userInfo = user;
        localStorage.setItem('user', JSON.stringify(user));
    };

    public logout = () => {
        this.userInfo = null;
        localStorage.setItem('user', '');
        this.routes.router?.navigate('/auth');
    };
}
