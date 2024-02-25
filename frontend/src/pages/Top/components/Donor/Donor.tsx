import clsx from 'clsx';
import { Top100User } from '../../../../shared/api';
import * as styles from './Donor.module.scss';
import Drop from './drop.svg?react';

const positionToColor = {
    0: '#F5D958',
    1: '#A6B3CE',
    2: '#ED9564',
};

export interface DonorProps {
    donor: Top100User;
    position: number;
}

export const Donor = ({ donor, position }: DonorProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.posContainer}>
                <Drop
                    fill={positionToColor[position as keyof typeof positionToColor] ?? '#F4F5F6'}
                />
                <span className={clsx(styles.posText, position > 2 && styles.dark)}>
                    {position}
                </span>
            </div>
            <img className={styles.ava} src="/drop_ava.svg" />
            <div className={styles.nameWrapper}>
                <div className={styles.name}>
                    {donor.first_name} {donor.last_name}
                </div>
                <div>{donor.city?.title}</div>
            </div>
            <div className={styles.bloodContainer}>
                <div className={styles.indicator}>
                    <div className={clsx(styles.counter, 'blood')} />
                    <div>{donor.donation_agg.blood ?? 0}</div>
                </div>

                <div className={styles.indicator}>
                    <div className={clsx(styles.counter, 'plasma')} />
                    <div>{donor.donation_agg.plasma ?? 0}</div>
                </div>

                <div className={styles.indicator}>
                    <div className={clsx(styles.counter, 'red_blood_cells')} />
                    <div>{donor.donation_agg.leukocytes ?? 0}</div>
                </div>

                <div className={styles.indicator}>
                    <div className={clsx(styles.counter, 'granulocytes')} />
                    <div>{donor.donation_agg.leukocytes ?? 0}</div>
                </div>

                <div className={styles.indicator}>
                    <div className={clsx(styles.counter, 'platelets')} />
                    <div>{donor.donation_agg.platelets ?? 0}</div>
                </div>
            </div>
        </div>
    );
};
