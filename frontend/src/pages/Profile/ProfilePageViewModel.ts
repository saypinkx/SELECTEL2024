import { makeObservable } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { AuthService } from '../../services';

@Service({ transient: true })
export class ProfilePageViewModel extends ViewModel {
    constructor(public auth: AuthService) {
        super();
        makeObservable(this);
        this.auth = Container.get(AuthService);
    }
}
