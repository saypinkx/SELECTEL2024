import { PaidType } from '.';
import { DonationType } from './constatns';

export type Donation = {
    id: number;
    type_price: PaidType;
    location: string;
    certificate: string;
    status: 'pending' | 'planning';
    date: string;
    type_donation: DonationType;
    is_stationary: boolean;
    centre: string;
    owner_id: number;
};
