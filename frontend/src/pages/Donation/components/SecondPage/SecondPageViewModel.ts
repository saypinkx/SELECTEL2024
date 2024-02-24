import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { DonationViewModel } from '../../DonationViewModel';
import type { PlaceType } from '../../constatns';
import { BloodStationInformationApi, RegionsApi } from '../../../../shared/api';
import { SelectOption } from '@gravity-ui/uikit';

@Service({ transient: true })
export class SecondPageViewModel extends ViewModel<DonationViewModel> {
    @observable placeType?: PlaceType;
    @observable.ref certificate?: File;

    @observable country = -1;
    @observable countriesOptions: SelectOption[] = [];

    @observable region = -1;
    @observable regionsOptions: SelectOption[] = [];

    @observable city = -1;
    @observable citiesOptions: SelectOption[] = [];

    @observable address = -1;
    @observable addressesOptions: SelectOption[] = [];

    @observable loadOptions = false;

    @computed get hasErrors() {
        if (!this.placeType || !this.certificate) return true;
        return [this.country, this.address, this.city, this.region].some(v => v === -1);
    }

    constructor(
        private regionsApi: RegionsApi,
        private stationsApi: BloodStationInformationApi,
    ) {
        super();
        makeObservable(this);
        this.regionsApi = Container.get(RegionsApi);
        this.stationsApi = Container.get(BloodStationInformationApi);

        this.loadOptions = true;
        this.regionsApi
            .countriesList({
                ordering: 'title',
                page_size: 1000,
            })
            .then(({ results = [] }) => {
                runInAction(() => {
                    this.countriesOptions = results.map(country => ({
                        value: country.id.toString(),
                        content: country.title,
                    }));
                });
            })
            .finally(() => {
                runInAction(() => {
                    this.loadOptions = false;
                });
            });
    }

    @action setPlaceType = (value: PlaceType) => {
        this.placeType = value;
    };

    @action setCountry = (value: number) => {
        this.country = value;
        this.region = -1;
        this.city = -1;
        this.address = -1;

        this.loadOptions = true;
        this.regionsApi
            .regionsList({
                ordering: 'title',
                country: this.country,
                page_size: 10000,
            })
            .then(({ results = [] }) => {
                runInAction(() => {
                    this.regionsOptions = results.map(region => ({
                        value: region.id.toString(),
                        content: region.title,
                    }));
                });
            })
            .finally(() => {
                runInAction(() => {
                    this.loadOptions = false;
                });
            });
    };

    @action setRegion = (value: number) => {
        this.region = value;
        this.city = -1;
        this.address = -1;

        this.loadOptions = true;
        this.regionsApi
            .citiesList({
                ordering: 'title',
                country: this.country,
                region: this.region,
                page_size: 10000,
            })
            .then(({ results = [] }) => {
                runInAction(() => {
                    this.citiesOptions = results.map(city => ({
                        value: city.id.toString(),
                        content: city.title,
                    }));
                });
            })
            .finally(() => {
                runInAction(() => {
                    this.loadOptions = false;
                });
            });
    };

    @action setCity = (value: number) => {
        this.city = value;
        this.address = -1;
        this.loadOptions = true;
        this.stationsApi
            .bloodStationsList({
                ordering: 'title',
                city_id: this.city,
                page_size: 10000,
            })
            .then(({ results = [] }) => {
                runInAction(() => {
                    this.addressesOptions = results.map(address => ({
                        value: address.id.toString(),
                        content: address.title,
                    }));
                });
            })
            .finally(() => {
                runInAction(() => {
                    this.loadOptions = false;
                });
            });
    };

    @action setAddress = (value: number) => {
        this.address = value;
    };

    @action uploadCertificate = (files: File[]) => {
        this.certificate = files[0];
    };

    @action saveDonation = () => {
        this.parent.saveDonation();
        Telegram.WebApp.showAlert('Донация добавлена', () => {
            Telegram.WebApp.close();
        });
    };
}
