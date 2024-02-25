import { action, makeObservable, observable, runInAction } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { type PlaceType, donationTypes } from './constatns';
import { SelectOption } from '@gravity-ui/uikit';
import { ApiApi, BloodStationInformationApi, RegionsApi } from '../../shared/api';
import { AuthService } from '../../services';
import { Donation } from './types';
import { dateTimeParse } from '@gravity-ui/date-utils';

export type DonationType = (typeof donationTypes)[number]['type'];
export type PaidType = 'free' | 'paid';

@Service({ transient: true })
export class DonationViewModel extends ViewModel {
    private api = Container.get(ApiApi);
    private auth = Container.get(AuthService);
    private regionsApi = Container.get(RegionsApi);
    private stationsApi = Container.get(BloodStationInformationApi);

    @observable id?: number;
    @observable pageType: 'create' | 'edit' | 'plan' = 'create';
    @observable step: 'first' | 'second' = 'first';
    @observable donationType?: DonationType;
    @observable date?: Date;
    @observable paidType?: PaidType;
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

    constructor() {
        super();
        makeObservable(this);

        this.loadCountries();
    }

    @action goToFirstPage = () => {
        this.step = 'first';
    };

    @action goToSecondPage = () => {
        this.step = 'second';
    };

    @action setDonationType = (value: DonationType) => {
        this.donationType = value;
    };

    @action setDate = (value: Date) => {
        this.date = value;
    };

    @action setPaidType = (value: PaidType) => {
        this.paidType = value;
    };

    @action setPlaceType = (value: PlaceType) => {
        this.placeType = value;
    };

    @action loadCountries = async () => {
        this.loadOptions = true;
        return this.regionsApi
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
    };

    @action setCountry = async (value: number) => {
        this.country = value;
        this.region = -1;
        this.city = -1;
        this.address = -1;
        return this.loadRegions(this.country);
    };

    @action loadRegions = async (country: number) => {
        this.loadOptions = true;
        return this.regionsApi
            .regionsList({
                ordering: 'title',
                country,
                page_size: 1000,
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

    @action setRegion = async (value: number) => {
        this.region = value;
        this.city = -1;
        this.address = -1;
        return this.loadCities(this.country, this.region);
    };

    @action loadCities = async (country: number, region: number) => {
        this.loadOptions = true;
        return this.regionsApi
            .citiesList({
                ordering: 'title',
                country,
                region,
                page_size: 1000,
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

    @action setCity = async (value: number) => {
        this.city = value;
        this.address = -1;
        return this.loadAddresses(this.city);
    };

    @action loadAddresses = async (city: number) => {
        this.loadOptions = true;
        return this.stationsApi
            .bloodStationsList({
                ordering: 'title',
                city_id: city,
                page_size: 1000,
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

    @action loadDonationInfo = async (id: number) => {
        this.api.getDonationApiDonationsDonationIdGet(id).then((data: Donation) => {
            this.donationType = data.type_donation;
            this.date = dateTimeParse(data.date)?.toDate() ?? new Date();
            this.paidType = data.type_price;
            const location = JSON.parse(data.location);
            this.country = location.country;
            this.city = location.city;
            this.region = location.region;
            this.address = location.address || -1;
            this.loadRegions(this.country);
            this.loadCities(this.country, this.region);
            this.loadAddresses(this.city);
            this.placeType = data.is_stationary ? 'station' : 'mobile';
        });
    };

    onSave = () => {
        if (this.pageType === 'create') return this.createDonation();
        if (this.pageType === 'edit') this.editDonation('Донация изменена');
        if (this.pageType === 'plan') this.editDonation('Донация запланирована');
    };

    createDonation = () => {
        this.api.createDonationApiDonationsPost(
            {
                date: this.date!.toISOString(),
                user_id: this.auth.userInfo!.meta!.id,
                is_stationary: this.placeType === 'station',
                type_donation: this.donationType!,
                status: 'pending',
                type_price: this.paidType!,
                location: JSON.stringify({
                    country: this.country,
                    region: this.region,
                    city: this.city,
                    address: this.address,
                }),
                centre: this.address.toString(),
            },
            {
                file: this.certificate,
            },
        );
        Telegram.WebApp.showAlert('Донация добавлена', () => {
            Telegram.WebApp.close();
        });
    };

    editDonation = (message: string) => {
        if (!this.id) return;
        this.api.updateDonationApiDonationsDonationIdPut(
            this.id,
            {
                date: this.date!.toISOString(),
                is_stationary: this.placeType === 'station',
                status: 'pending',
                type_price: this.paidType!,
                location: JSON.stringify({
                    country: this.country,
                    region: this.region,
                    city: this.city,
                    address: this.address,
                }),
                centre: this.address.toString(),
            },
            {
                file: this.certificate,
            },
        );
        Telegram.WebApp.showAlert(message, () => {
            Telegram.WebApp.close();
        });
    };
}
