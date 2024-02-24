import { ViewModel } from '@yoskutik/react-vvm';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { type BonusDetail, BonusInformationApi } from '../../shared/api';
import Container, { Service } from 'typedi';

@Service()
export class BonusPageViewModel extends ViewModel {
    @observable.ref bonus?: BonusDetail;

    constructor(private bonusApi: BonusInformationApi) {
        super();
        makeObservable(this);
        this.bonusApi = Container.get(BonusInformationApi);
    }

    @action async loadBonus(id: number) {
        this.bonusApi.bonusesRetrieve(+id).then(bonus => {
            runInAction(() => {
                this.bonus = bonus;
            });
        });
    }

    takeBonus = () => {
        Telegram.WebApp.MainButton.setParams({
            is_visible: true,
            color: '#38AFF2',
            text: 'Оставить отзыв',
            text_color: '#fff',
        });
        Telegram.WebApp.offEvent('mainButtonClicked', this.takeBonus);
    };
}
