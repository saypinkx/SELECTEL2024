import { useEffect, useState } from 'react';
import { Donation } from '../../../Donation/types';
import Container from 'typedi';
import { BloodStationInformationApi, BloodStationWithNeeds } from '../../../../shared/api';
import { DropdownMenu, Icon, Skeleton } from '@gravity-ui/uikit';
import { donationTypeToText } from '../../constants';
import { dateTimeParse } from '@gravity-ui/date-utils';
import { useNavigate } from 'react-router';
import * as styles from './DonationCard.module.scss';
import { TrashBin, Pencil } from '@gravity-ui/icons';
import clsx from 'clsx';
export interface DonationCardProps {
    donation: Donation;
}

export const DonationCard = ({ donation }: DonationCardProps) => {
    const [stationInfo, setStationInfo] = useState<BloodStationWithNeeds | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        Container.get(BloodStationInformationApi)
            .bloodStationsRetrieve(+donation.centre)
            .then(data => {
                setStationInfo(data);
            });
    }, [donation.centre]);

    if (!stationInfo) return <Skeleton />;
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>{dateTimeParse(donation.date)?.format('DD MMM YYYY')}</div>
                <DropdownMenu
                    items={[
                        [
                            {
                                action: () => navigate(`/donation/edit/${donation.id}`),
                                iconEnd: <Icon data={Pencil} />,
                                text: 'Редактировать',
                            },
                        ],
                        [
                            {
                                action: () => {},
                                iconEnd: <Icon data={TrashBin} />,
                                text: 'Удалить',
                                theme: 'danger',
                            },
                        ],
                    ]}
                />
            </div>

            <div className={styles.title}>{stationInfo.title}</div>
            <div className={styles.address}>{stationInfo.address}</div>
            <div className={styles.footer}>
                <div className={styles.column}>
                    <div className={styles.price}>
                        {donation.type_price === 'paid' ? 'Платно' : 'Безвозмездно'}
                    </div>
                    <div className={styles.cert}>
                        Справка {donation.certificate ? 'присутствует' : 'отсутствует'}
                    </div>
                </div>
                <div className={clsx(styles.type, donation.type_donation)}>
                    {donationTypeToText[donation.type_donation]}
                </div>
            </div>
        </div>
    );
};
