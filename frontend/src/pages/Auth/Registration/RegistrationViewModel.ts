import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { email, password, phone, validate } from '../../../shared/lib';
import { AccountCreationAndConfirmationApi } from '../../../shared/api';
import { RouterService } from '../../../services';

@Service({ transient: true })
export class RegistrationViewModel extends ViewModel {
    @observable private userId: number | undefined;
    @observable step: 'chooseType' | 'enterData' | 'confirm' = 'chooseType';
    @observable name = '';
    @observable email = '';
    @observable phone = '';
    @observable password = '';
    @observable confirmCode = '';
    @observable registrationType: 'email' | 'phone' | undefined = undefined;

    @computed get emailError() {
        return validate(this.email, email).errorMessage;
    }

    @computed get phoneError() {
        return validate(this.phone, phone).errorMessage;
    }

    @computed get passwordError() {
        return validate(this.password, password).errorMessage;
    }

    @computed get isValidLoginForm() {
        return !this.passwordError && !this.phoneError && !this.emailError;
    }

    constructor(
        private regApi: AccountCreationAndConfirmationApi,
        private routes: RouterService,
    ) {
        super();
        makeObservable(this);
        this.regApi = Container.get(AccountCreationAndConfirmationApi);
        this.routes = Container.get(RouterService);
    }

    @action onChangeName = (value: string) => {
        this.name = value;
    };

    @action onChangePhone = (value: string) => {
        this.phone = value;
    };

    @action onChangeEmail = (value: string) => {
        this.email = value;
    };

    @action onChangePassword = (value: string) => {
        this.password = value;
    };

    @action onChangeConfirmCode = (value: string) => {
        this.confirmCode = value;
    };

    @action setRegistrationType = (type?: 'email' | 'phone') => {
        this.registrationType = type;
        this.step = 'enterData';
    };

    @action onRegister = async () => {
        if (!this.isValidLoginForm) return;
        const { user_id } = await this.regApi.authRegistrationCreate({
            first_name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone,
        });
        if (user_id) {
            runInAction(() => {
                this.userId = Number(user_id);
                this.step = 'confirm';
            });
        }
    };

    @action onSendConfirmCode = async () => {
        if (!this.userId) return;
        await (this.registrationType === 'email' ? this.confirmEmail() : this.confirmPhone());
        this.routes.router?.navigate('/');
    };

    @action confirmEmail = async () => {
        await this.regApi.authConfirmEmailRegCreate({
            user_id: this.userId!,
            code: +this.confirmCode,
            email: this.email,
        });
    };

    @action confirmPhone = async () => {
        await this.regApi.authConfirmPhoneRegCreate({
            user_id: this.userId!,
            code: +this.confirmCode,
            phone: this.phone,
        });
    };
}
