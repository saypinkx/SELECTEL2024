import { view } from '@yoskutik/react-vvm';
import { Button } from '@gravity-ui/uikit';
import { useEffect } from 'react';
import { donationTypes, paidTypes, typeToPageName } from '../../constatns';
import { Calendar } from '@gravity-ui/date-components';
import { dateTimeParse } from '@gravity-ui/date-utils';
import { FirstPageViewModel } from './FirstPageViewModel';
import styles from './FirstPage.module.scss';
import { Page } from '../../../../shared/ui';

export const FirstPage = view(FirstPageViewModel)(({ viewModel }) => {
    useEffect(() => {
        Telegram.WebApp.MainButton.setParams({
            color: '#F73232',
            text_color: '#fff',
            text: 'Далее',
        });

        Telegram.WebApp.onEvent('mainButtonClicked', viewModel.parent.goToSecondPage);
        return () => Telegram.WebApp.offEvent('mainButtonClicked', viewModel.parent.goToSecondPage);
    }, [viewModel]);

    useEffect(() => {
        Telegram.WebApp.MainButton.isVisible = !viewModel.hasErrors;
    }, [viewModel.hasErrors]);

    return (
        <Page title={typeToPageName[viewModel.parent.pageType]} cls={styles.container}>
            <div className={styles.block}>
                <h3 className={styles.blockHeader}>Выберите тип донации</h3>
                <div className={styles.tagsContainer}>
                    {donationTypes.map(({ type, text }) => (
                        <Button
                            view={
                                viewModel.parent.donationType === type
                                    ? 'outlined-action'
                                    : 'outlined'
                            }
                            key={type}
                            size="xl"
                            className={styles.tag}
                            onClick={() => viewModel.parent.setDonationType(type)}
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
                    onUpdate={date => viewModel.parent.setDate(date.toDate())}
                />
            </div>

            <div className={styles.block}>
                <h3 className={styles.blockHeader}>Тип донации</h3>
                <div className={styles.tagsContainer}>
                    {paidTypes.map(({ type, text }) => (
                        <Button
                            key={type}
                            view={
                                viewModel.parent.paidType === type ? 'outlined-action' : 'outlined'
                            }
                            className={styles.tag}
                            onClick={() => viewModel.parent.setPaidType(type)}
                            size="xl"
                        >
                            {text}
                        </Button>
                    ))}
                </div>
            </div>
        </Page>
    );
});
