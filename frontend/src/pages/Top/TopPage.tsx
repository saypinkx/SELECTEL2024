import { view } from '@yoskutik/react-vvm';
import { TopPageViewModel } from './TopPageViewModel';
import { Page } from '../../shared/ui';
import { Donor } from './components';
import * as styles from './TopPage.module.scss';

export const TopPage = view(TopPageViewModel)(({ viewModel }) => {
    return (
        <Page title="Топ 100 доноров" cls={styles.content}>
            <div className={styles.donors}>
                {viewModel.topList.map((donor, idx) => (
                    <Donor donor={donor} key={donor.id} position={idx} />
                ))}
            </div>
        </Page>
    );
});
