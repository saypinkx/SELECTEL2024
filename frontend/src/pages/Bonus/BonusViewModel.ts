import { ViewModel } from '@yoskutik/react-vvm';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { type BonusDetail, BonusInformationApi } from '../../shared/api';
import Container, { Service } from 'typedi';

@Service()
export class BonusPageViewModel extends ViewModel {
    @observable.ref bonus?: BonusDetail;
    @observable step: 'view' | 'review' = 'view';
    @observable review = '';

    constructor(private bonusApi: BonusInformationApi) {
        super();
        makeObservable(this);
        this.bonusApi = Container.get(BonusInformationApi);
    }

    @action onChangeReview = (value: string) => {
        this.review = value;
    };

    @action async loadBonus(id: number) {
        this.bonusApi.bonusesRetrieve(+id).then(bonus => {
            runInAction(() => {
                this.bonus = bonus;
            });
        });
    }

    @action giveReview = () => {
        this.step = 'review';
        Telegram.WebApp.MainButton.setParams({
            is_visible: true,
            color: '#38AFF2',
            text: 'Оставить отзыв',
            text_color: '#fff',
        });
        Telegram.WebApp.offEvent('mainButtonClicked', this.giveReview);
        Telegram.WebApp.onEvent('mainButtonClicked', this.saveReview);
    };

    saveReview = () => {
        Telegram.WebApp.showAlert('Отзыв отправлен', () => {
            Telegram.WebApp.close();
        });
    };

    takeBonus = () => {
        Telegram.WebApp.MainButton.setParams({
            is_visible: true,
            color: '#27C175',
            text: 'Оставить отзыв',
            text_color: '#fff',
        });
        Telegram.WebApp.offEvent('mainButtonClicked', this.takeBonus);
        Telegram.WebApp.onEvent('mainButtonClicked', this.giveReview);
    };
}
