import { action, makeObservable, observable } from 'mobx';
import { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { donationTypes } from './constatns';

export type DonationType = (typeof donationTypes)[number]['type'];
export type PaidType = 'free' | 'paid';

@Service({ transient: true })
export class DonationViewModel extends ViewModel {
    @observable step: 'first' | 'second' = 'first';

    constructor() {
        super();
        makeObservable(this);
    }

    @action saveDonation = () => {};
}
