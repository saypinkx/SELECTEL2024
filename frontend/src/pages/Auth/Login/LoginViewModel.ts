import { action, computed, makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { AuthService } from '../../../services';
import { password, validate } from '../../../shared/lib';

@Service({ transient: true })
export class LoginViewModel extends ViewModel {
    @observable login = '';

    @observable password = '';

    @computed get passwordError() {
        return validate(this.password, password).errorMessage;
    }

    @computed get isValidLoginForm() {
        return !this.passwordError;
    }

    @action onChangeLogin = (value: string) => {
        this.login = value;
    };

    @action onChangePassword = (value: string) => {
        this.password = value;
    };

    @action onLogin = () => {
        if (!this.isValidLoginForm) return;
        this.auth.login(this.login, this.password);
    };

    constructor(private auth: AuthService) {
        super();
        makeObservable(this);
        this.auth = Container.get(AuthService);
    }
}
