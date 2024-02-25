import { action, makeObservable, observable, runInAction } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { type PlaceType, donationTypes } from './constatns';
import { SelectOption } from '@gravity-ui/uikit';
import { ApiApi, BloodStationInformationApi, RegionsApi } from '../../shared/api';
import { AuthService } from '../../services';

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

    @action loadDonationInfo = async (id: number) => {
        // this.api.getUserDonationApiDonationsGet({ user_id: id }).then(data => {});
    };

    @action saveDonation = () => {
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
}
