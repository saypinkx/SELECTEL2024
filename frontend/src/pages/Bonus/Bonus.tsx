import { view } from '@yoskutik/react-vvm';
import { BonusPageViewModel } from './BonusViewModel';
import { Card, Loader, TextArea } from '@gravity-ui/uikit';
import { useCallback, useEffect } from 'react';
import styles from './Bonus.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { dateTimeParse } from '@gravity-ui/date-utils';

export const BonusPage = view(BonusPageViewModel)(({ viewModel }) => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const goToBack = useCallback(() => navigate(-1), [navigate]);

    useEffect(() => {
        if (!id) {
            navigate('/not_found');
        } else {
            viewModel.loadBonus(+id);
        }
    }, [id, navigate, viewModel]);

    useEffect(() => {
        Telegram.WebApp.MainButton.setParams({
            is_visible: true,
            color: '#F73232',
            text: 'Забрать бонус',
            text_color: '#fff',
        });
        Telegram.WebApp.onEvent('mainButtonClicked', viewModel.takeBonus);

        return () => {
            Telegram.WebApp.MainButton.hide();
            Telegram.WebApp.offEvent('mainButtonClicked', viewModel.takeBonus);
            Telegram.WebApp.offEvent('mainButtonClicked', viewModel.giveReview);
        };
    }, [viewModel.giveReview, viewModel.takeBonus]);

    useEffect(() => {
        Telegram.WebApp.BackButton.show();
        Telegram.WebApp.onEvent('backButtonClicked', goToBack);

        return () => {
            Telegram.WebApp.BackButton.hide();
            Telegram.WebApp.offEvent('mainButtonClicked', goToBack);
        };
    }, [goToBack, viewModel.takeBonus]);

    return (
        <div className={styles.pageContent}>
            {!viewModel.bonus ? (
                <Loader />
            ) : (
                <>
                    <h1 className={styles.pageHeader}>Бонусы для доноров</h1>
                    <Card view="clear" className={styles.card}>
                        <div className={styles.header}>
                            <img
                                className={styles.bonusImage}
                                src={viewModel.bonus?._bonus_image}
                                alt={viewModel.bonus.bonus_name}
                            />
                            <div className={styles.bonusInfo}>
                                <h2 className={styles.bonusName}>{viewModel.bonus.bonus_name}</h2>
                                <p className={styles.bonusDate}>{`до ${dateTimeParse(
                                    viewModel.bonus.date_validity,
                                )?.format('YYYY MMM DD')}`}</p>
                            </div>
                        </div>
                        {viewModel.step === 'view' && (
                            <p
                                className={styles.description}
                                dangerouslySetInnerHTML={{
                                    __html: viewModel.bonus?.bonus_description,
                                }}
                            ></p>
                        )}
                        {viewModel.step === 'review' && (
                            <TextArea
                                rows={10}
                                value={viewModel.review}
                                placeholder="Оставьте свой отзыв здесь"
                                onChange={e => viewModel.onChangeReview(e.target.value)}
                            />
                        )}
                    </Card>
                </>
            )}
        </div>
    );
});
