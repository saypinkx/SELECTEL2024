import { computed, makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { User } from '../shared/api';
import { RouterService } from '.';

@Service()
export class AuthService {
    @observable.ref userInfo: User | null = null;

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

    public logout() {
        this.userInfo = null;
        localStorage.setItem('user', '');
        this.routes.router?.navigate('/auth');
    }
}
