import { DonationViewModel } from './DonationViewModel';
import { view } from '@yoskutik/react-vvm';
import { donationTypes } from './constatns';
import { Calendar } from '@gravity-ui/date-components';
import { Button } from '@gravity-ui/uikit';
import { dateTimeParse } from '@gravity-ui/date-utils';
import * as styles from './Donation.module.scss';

export const DonationPage = view(DonationViewModel)(({ viewModel }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.pageHeader}>Добавление донации</h2>
            <div className={styles.block}>
                <h3 className={styles.blockHeader}>Выберите тип донации</h3>
                <div className={styles.tagsContainer}>
                    {donationTypes.map(({ type, text }) => (
                        <Button
                            view={viewModel.donationType === type ? 'outlined-action' : 'outlined'}
                            key={type}
                            size="xl"
                            className={styles.tag}
                            onClick={() => viewModel.setDonationType(type)}
                        >
                            {text}
                        </Button>
                    ))}
                </div>
            </div>

            <div className={styles.block}>
                <h3 className={styles.blockHeader}>Дата донации</h3>
                <Calendar
                    size="xl"
                    // @ts-expect-error баг в типизации либы
                    minValue={dateTimeParse('now')!}
                    onUpdate={date => viewModel.setDate(date.toDate())}
                />
            </div>

            <div className={styles.block}>
                <h3 className={styles.blockHeader}>Тип донации</h3>
                <div className={styles.tagsContainer}>
                    {(
                        [
                            {
                                type: 'free',
                                text: 'Безвозмездно',
                            },
                            {
                                type: 'paid',
                                text: 'Платно',
                            },
                        ] as const
                    ).map(({ type, text }) => (
                        <Button
                            key={type}
                            view={viewModel.paidType === type ? 'outlined-action' : 'outlined'}
                            className={styles.tag}
                            onClick={() => viewModel.setPaidType(type)}
                            size="xl"
                        >
                            {text}
                        </Button>
                    ))}
                </div>
            </div>
            <Button size="xl" view="action" width="max" disabled={viewModel.hasErrors}>
                Далее
            </Button>
        </div>
    );
});
