import { action, makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { ApiApi } from '../../shared/api';
import { AuthService } from '../../services';
import { Donation } from '../Donation/types';

@Service({ transient: true })
export class DonationsViewModel extends ViewModel {
    api = Container.get(ApiApi);
    auth = Container.get(AuthService);

    @observable.shallow donations: Donation[] = [];

    constructor() {
        super();
        makeObservable(this);

        this.loadDonations();
    }

    @action loadDonations = async () => {
        this.donations = await this.api.getUserDonationApiDonationsGet({
            user_id: this.auth.userInfo!.meta!.id,
        });
    };
}
