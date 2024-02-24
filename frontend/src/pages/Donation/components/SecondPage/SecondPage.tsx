import { view } from '@yoskutik/react-vvm';
import { Button, Select } from '@gravity-ui/uikit';
import { useEffect } from 'react';
import { placeTypes } from '../../constatns';
import { SecondPageViewModel } from './SecondPageViewModel';
import styles from './SecondPage.module.scss';
import { EmptySearch } from './components';
import { FileInput } from '../../../../shared/ui';

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
        Telegram.WebApp.onEvent('mainButtonClicked', viewModel.saveDonation);
        Telegram.WebApp.onEvent('backButtonClicked', viewModel.parent.goToFirstPage);
        return () => {
            Telegram.WebApp.BackButton.isVisible = false;
            Telegram.WebApp.offEvent('mainButtonClicked', viewModel.saveDonation);
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
                            view={viewModel.placeType === type ? 'outlined-action' : 'outlined'}
                            key={type}
                            size="xl"
                            className={styles.tag}
                            onClick={() => viewModel.setPlaceType(type)}
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
                        value={viewModel.country === -1 ? [] : [viewModel.country.toString()]}
                        onUpdate={values => viewModel.setCountry(+values[0])}
                        options={viewModel.countriesOptions}
                        disabled={viewModel.loadOptions}
                        loading={viewModel.loadOptions}
                        renderEmptyOptions={EmptySearch}
                        filterable
                        size="xl"
                    />
                    <Select
                        placeholder="Область"
                        value={viewModel.region === -1 ? [] : [viewModel.region.toString()]}
                        disabled={viewModel.country === -1}
                        onUpdate={values => viewModel.setRegion(+values[0])}
                        options={viewModel.regionsOptions}
                        loading={viewModel.loadOptions}
                        renderEmptyOptions={EmptySearch}
                        filterable
                        size="xl"
                    />
                    <Select
                        placeholder="Город"
                        value={viewModel.city === -1 ? [] : [viewModel.city.toString()]}
                        disabled={viewModel.region === -1}
                        onUpdate={values => viewModel.setCity(+values[0])}
                        options={viewModel.citiesOptions}
                        loading={viewModel.loadOptions}
                        renderEmptyOptions={EmptySearch}
                        filterable
                        size="xl"
                    />
                    <Select
                        placeholder="Адрес центра"
                        value={viewModel.address === -1 ? [] : [viewModel.address.toString()]}
                        disabled={viewModel.city === -1}
                        onUpdate={values => viewModel.setAddress(+values[0])}
                        options={viewModel.addressesOptions}
                        loading={viewModel.loadOptions}
                        renderEmptyOptions={EmptySearch}
                        filterable
                        size="xl"
                    />
                </div>
            </div>

            <div className={styles.block}>
                <h3 className={styles.blockHeader}>Справка</h3>
                <FileInput
                    label="Прикрепить справку"
                    size="xl"
                    width="max"
                    view="outlined"
                    onUpdate={viewModel.uploadCertificate}
                />
            </div>
        </div>
    );
});
