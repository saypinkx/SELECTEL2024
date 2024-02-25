export type ListOption = Record<'type' | 'text', string>;
export type DonationType = (typeof donationTypes)[number]['type'];
export type PlaceType = (typeof placeTypes)[number]['type'];
export type PaidType = (typeof paidTypes)[number]['type'];

export const donationTypes = [
    {
        type: 'blood',
        text: 'Цельная кровь',
    },
    {
        type: 'plasma',
        text: 'Плазма',
    },
    {
        type: 'platelets',
        text: 'Тромбоциты',
    },
    {
        type: 'red_blood_cells',
        text: 'Эритроциты',
    },
    {
        type: 'granulocytes',
        text: 'Гранулоциты',
    },
] as const satisfies ListOption[];

export const placeTypes = [
    {
        type: 'station',
        text: 'Стационарный пункт',
    },
    {
        type: 'mobile',
        text: 'Выездная акция',
    },
] as const satisfies ListOption[];

export const paidTypes = [
    {
        type: 'free',
        text: 'Безвозмезно',
    },
    {
        type: 'paid',
        text: 'Платно',
    },
] as const satisfies ListOption[];

export const typeToPageName = {
    create: 'Создание донации',
    edit: 'Редактирование донации',
    plan: 'Планирование донации',
};
