import { DonationType } from '../Donation/constatns';

export const donationTypeToText: Record<DonationType, string> = {
    blood: 'Цельная кровь',
    plasma: 'Плазма',
    red_blood_cells: 'Тромбоциты',
    platelets: 'Эритроциты',
    granulocytes: 'Гранулоциты',
};
