import { ViewModel } from '@yoskutik/react-vvm';
import { makeObservable, observable, runInAction } from 'mobx';
import Container, { Service } from 'typedi';
import { BonusInformationApi, BonusList } from '../../shared/api';

@Service({ transient: true })
export class BonusesViewModel extends ViewModel {
    @observable search = '';
    @observable isLoading = false;
    @observable.ref bonusList: BonusList[] = [];

    constructor(private bonusApi: BonusInformationApi) {
        super();
        makeObservable(this);
        this.bonusApi = Container.get(BonusInformationApi);

        this.isLoading = true;
        this.bonusApi.bonusesList({}).then(({ results = [] }) => {
            runInAction(() => {
                this.bonusList = results;
                this.isLoading = false;
            });
        });
    }
}
