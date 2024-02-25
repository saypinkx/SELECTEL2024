import { makeObservable, observable } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { Top100User, UserInformationApi } from '../../shared/api';

@Service({ transient: true })
export class TopPageViewModel extends ViewModel {
    private usersApi = Container.get(UserInformationApi);

    @observable.shallow topList: Top100User[] = [];
    @observable.ref filter = '';

    constructor() {
        super();
        makeObservable(this);

        this.usersApi.usersTopRetrieve().then(({ items }) => {
            this.topList = items;
        });
    }
}
