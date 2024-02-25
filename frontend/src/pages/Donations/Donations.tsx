import { view } from '@yoskutik/react-vvm';
import { DonationsViewModel } from './DonationsViewModel';
import { Page } from '../../shared/ui';
import styles from './Donations.module.scss';
import { DonationCard } from './components';

export const DonationsPage = view(DonationsViewModel)(({ viewModel }) => {
    return (
        <Page title="Мои донации" cls={styles.content}>
            <div className={styles.donations}>
                {viewModel.donations
                    .filter(({ centre }) => centre !== '-1')
                    .map(donation => (
                        <DonationCard key={donation.id} donation={donation} />
                    ))}
            </div>
        </Page>
    );
});
