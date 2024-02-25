import { view } from '@yoskutik/react-vvm';
import { DonationsViewModel } from './DonationsViewModel';
import { Page } from '../../shared/ui';
import styles from './Donations.module.scss';
// import { useNavigate } from 'react-router';

export const Donations = view(DonationsViewModel)(({ viewModel }) => {
    // const navigate = useNavigate();

    return (
        <Page title="Мои донации">
            {/* <DonorInfo /> */}
            <div className={styles.donations}>
                {viewModel.donations.map(() => (
                    <div>карточка</div>
                ))}
            </div>
        </Page>
    );
});
