import { ViewModel } from '@yoskutik/react-vvm';
import { action, makeObservable, observable } from 'mobx';
import { EventsApi } from '../shared/api';
import Container, { Service } from 'typedi';

@Service()
export class AppViewModel extends ViewModel {
    @observable counter = 0;

    @observable result = '';

    constructor(public events: EventsApi) {
        super();
        makeObservable(this);
        this.events = Container.get(EventsApi);
    }

    @action click = async () => {
        this.counter++;
        this.result = 'Loading...';
        const res = await this.events.eventsList();
        this.result = JSON.stringify(res, null, 2);
    };
}
