import { view } from '@yoskutik/react-vvm';
import { Button, Select } from '@gravity-ui/uikit';
import { useEffect } from 'react';
import { placeTypes } from '../../constatns';
import { SecondPageViewModel } from './SecondPageViewModel';
import styles from './SecondPage.module.scss';
import { EmptySearch } from './components';
import { FileInput } from '../../../../shared/ui';
import { isTelegram } from '../../../../shared/lib';

export const SecondPage = view(SecondPageViewModel)(({ viewModel }) => {
    useEffect(() => {
        Telegram.WebApp.MainButton.isVisible = !viewModel.hasErrors;
    }, [viewModel.hasErrors]);

    useEffect(() => {
        Telegram.WebApp.MainButton.setParams({
            color: '#27C175',
            text_color: '#fff',
            text: 'Сохранить донацию',
            is_visible: false,
        });
        Telegram.WebApp.BackButton.isVisible = true;
        Telegram.WebApp.onEvent('mainButtonClicked', viewModel.parent.saveDonation);
        Telegram.WebApp.onEvent('backButtonClicked', viewModel.parent.goToFirstPage);
        return () => {
            Telegram.WebApp.BackButton.isVisible = false;
            Telegram.WebApp.offEvent('mainButtonClicked', viewModel.parent.saveDonation);
            Telegram.WebApp.offEvent('backButtonClicked', viewModel.parent.goToFirstPage);
        };
    }, [viewModel]);

    return (
        <div className={styles.container}>
            <h2 className={styles.pageHeader}>Добавление донации</h2>
            <div className={styles.block}>
                <h3 className={styles.blockHeader}>Выберите тип донации</h3>
                <div className={styles.tagsContainer}>
                    {placeTypes.map(({ type, text }) => (
                        <Button
                            view={
                                viewModel.parent.placeType === type ? 'outlined-action' : 'outlined'
                            }
                            key={type}
                            size="xl"
                            className={styles.tag}
                            onClick={() => viewModel.parent.setPlaceType(type)}
                        >
                            {text}
                        </Button>
                    ))}
                </div>
            </div>

            <div className={styles.block}>
                <h3 className={styles.blockHeader}>Адрес центра крови</h3>
                <div className={styles.location}>
                    <Select
                        placeholder="Страна"
                        value={
                            viewModel.parent.country === -1
                                ? []
                                : [viewModel.parent.country.toString()]
                        }
                        onUpdate={values => viewModel.parent.setCountry(+values[0])}
                        options={viewModel.parent.countriesOptions}
                        disabled={viewModel.parent.loadOptions}
                        loading={viewModel.parent.loadOptions}
                        renderEmptyOptions={EmptySearch}
                        filterable
                        size="xl"
                    />
                    <Select
                        placeholder="Область"
                        value={
                            viewModel.parent.region === -1
                                ? []
                                : [viewModel.parent.region.toString()]
                        }
                        disabled={viewModel.parent.country === -1}
                        onUpdate={values => viewModel.parent.setRegion(+values[0])}
                        options={viewModel.parent.regionsOptions}
                        loading={viewModel.parent.loadOptions}
                        renderEmptyOptions={EmptySearch}
                        filterable
                        size="xl"
                    />
                    <Select
                        placeholder="Город"
                        value={
                            viewModel.parent.city === -1 ? [] : [viewModel.parent.city.toString()]
                        }
                        disabled={viewModel.parent.region === -1}
                        onUpdate={values => viewModel.parent.setCity(+values[0])}
                        options={viewModel.parent.citiesOptions}
                        loading={viewModel.parent.loadOptions}
                        renderEmptyOptions={EmptySearch}
                        filterable
                        size="xl"
                    />
                    {viewModel.parent.placeType === 'station' && (
                        <Select
                            placeholder="Адрес центра"
                            value={
                                viewModel.parent.address === -1
                                    ? []
                                    : [viewModel.parent.address.toString()]
                            }
                            disabled={viewModel.parent.city === -1}
                            onUpdate={values => viewModel.parent.setAddress(+values[0])}
                            options={viewModel.parent.addressesOptions}
                            loading={viewModel.parent.loadOptions}
                            renderEmptyOptions={EmptySearch}
                            filterable
                            size="xl"
                        />
                    )}
                </div>
            </div>

            <div className={styles.block}>
                <h3 className={styles.blockHeader}>Справка</h3>
                <FileInput
                    label="Прикрепить справку"
                    size="xl"
                    width="max"
                    view="outlined"
                    onUpdate={viewModel.parent.uploadCertificate}
                />
                <div className={styles.certHint}>
                    <p>
                        Принимаются только фото официальных справок о сдаче крови от центров крови
                        соответствующей страны. Необходимо для верификации совершенной донации,
                        чтобы учитывать в уровнях и бонусной программе
                    </p>
                    <p>Либо сделайте это позже</p>
                </div>
            </div>

            {!isTelegram() && !viewModel.hasErrors && (
                <Button
                    view="action"
                    pin="round-round"
                    size="xl"
                    width="max"
                    onClick={viewModel.parent.saveDonation}
                >
                    Далее
                </Button>
            )}
        </div>
    );
});
