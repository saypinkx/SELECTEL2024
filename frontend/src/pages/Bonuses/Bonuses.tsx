import { view } from '@yoskutik/react-vvm';
import { BonusesViewModel } from './BonusesViewModel';
import styles from './Bonuses.module.scss';
import { Icon, Loader } from '@gravity-ui/uikit';
import { TextBox } from '../../shared/ui';
import { Magnifier } from '@gravity-ui/icons';
import { dateTimeParse } from '@gravity-ui/date-utils';
import { useNavigate } from 'react-router-dom';
export const BonusesPage = view(BonusesViewModel)(({ viewModel }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.pageContent}>
            <h1 className={styles.pageHeader}>Бонусы для доноров</h1>
            <TextBox
                size="xl"
                value={viewModel.search}
                className={styles.search}
                placeholder="Поиск бонусов"
                leftContent={<Icon data={Magnifier} />}
            />
            <div className={styles.bonusCards}>
                {viewModel.isLoading && <Loader size="m" className={styles.loader} />}
                {viewModel.bonusList.map(bonus => {
                    return (
                        <div
                            key={bonus.id}
                            className={styles.bonusCard}
                            onClick={() => navigate(`/bonus/${bonus.id}`)}
                        >
                            <img
                                className={styles.bonusImage}
                                src={bonus.bonus_image}
                                alt={bonus.bonus_name}
                            />
                            <div className={styles.bonusCardContent}>
                                <p className={styles.bonusName}>{bonus.bonus_name}</p>
                                <p className={styles.bonusDate}>{`до ${dateTimeParse(
                                    bonus.date_validity,
                                )?.format('YYYY MMM DD')}`}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});
