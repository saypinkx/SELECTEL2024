import { computed, makeObservable } from 'mobx';
import { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { DonationViewModel } from '../../DonationViewModel';

@Service({ transient: true })
export class FirstPageViewModel extends ViewModel<DonationViewModel> {
    @computed get hasErrors() {
        return [this.parent.donationType, this.parent.date, this.parent.paidType].some(
            v => v === undefined,
        );
    }

    constructor() {
        super();
        makeObservable(this);
    }
}
