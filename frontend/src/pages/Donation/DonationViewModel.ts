import { action, computed, makeObservable, observable } from 'mobx';
import { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { donationTypes } from './constatns';

export type DonationType = (typeof donationTypes)[number]['type'];
export type PaidType = 'free' | 'paid';

@Service({ transient: true })
export class DonationViewModel extends ViewModel {
    @observable donationType?: DonationType;
    @observable date?: Date;
    @observable paidType?: PaidType;

    @computed get hasErrors() {
        return [this.donationType, this.date, this.paidType].some(v => v === undefined);
    }

    constructor() {
        super();
        makeObservable(this);
    }

    @action setDonationType = (value: DonationType) => {
        this.donationType = value;
    };

    @action setDate = (value: Date) => {
        this.date = value;
    };

    @action setPaidType = (value: PaidType) => {
        this.paidType = value;
    };
}
