import { computed, makeObservable, observable } from 'mobx';
import { Service } from 'typedi';
import { User } from '../shared/api';

@Service()
export class AuthService {
    @observable.ref userInfo: User | null = null;

    @computed get userIsAuthenticated() {
        return !!this.userInfo;
    }

    constructor() {
        makeObservable(this);
    }

    public setUserInfo = (user: User) => {
        this.userInfo = user;
    };
}
