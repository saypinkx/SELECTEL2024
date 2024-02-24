import { ViewModel } from '@yoskutik/react-vvm';
import { action, makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { AccountRecoveryApi } from '../../shared/api';
import { AuthService } from '../../services';

@Service()
export class ChangePasswordViewModel extends ViewModel {
    @observable password = '';

    constructor(
        private accountApi: AccountRecoveryApi,
        private authService: AuthService,
    ) {
        super();
        makeObservable(this);
        this.accountApi = Container.get(AccountRecoveryApi);
        this.authService = Container.get(AuthService);
    }

    @action setPassword(password: string) {
        this.password = password;
    }

    saveNewPassword() {
        this.accountApi.authSetPasswordCreate({
            password: this.password,
            token: '', // TODO откуда его брать?
        });
    }
}
