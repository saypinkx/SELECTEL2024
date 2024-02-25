import { computed, makeObservable } from 'mobx';
import { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { DonationViewModel } from '../../DonationViewModel';

@Service({ transient: true })
export class SecondPageViewModel extends ViewModel<DonationViewModel> {
    @computed get hasErrors() {
        if (!this.parent.placeType) return true;
        if (this.parent.placeType === 'station' && this.parent.address === -1) return true;
        return [this.parent.country, this.parent.region, this.parent.city].some(v => v === -1);
    }

    constructor() {
        super();
        makeObservable(this);
    }
}
