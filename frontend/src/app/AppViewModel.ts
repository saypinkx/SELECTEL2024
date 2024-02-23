import { ViewModel } from '@yoskutik/react-vvm';
import { action, makeObservable, observable } from 'mobx';
import { EventsApi } from '../shared/api';
import Container, { Service } from 'typedi';
import { AuthService } from '../services';

@Service()
export class AppViewModel extends ViewModel {
    @observable counter = 0;

    @observable result = '';

    constructor(
        public events: EventsApi,
        public auth: AuthService,
    ) {
        super();
        makeObservable(this);
        this.events = Container.get(EventsApi);
        this.auth = Container.get(AuthService);
    }

    @action click = async () => {
        this.counter++;
        this.result = 'Loading...';
        const res = await this.events.eventsList();
        this.result = JSON.stringify(res, null, 2);
    };
}
