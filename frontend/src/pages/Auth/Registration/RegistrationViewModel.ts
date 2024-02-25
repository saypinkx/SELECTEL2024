import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import Container, { Service } from 'typedi';
import { ViewModel } from '@yoskutik/react-vvm';
import { AccountCreationAndConfirmationApi, isApiError } from '../../../shared/api';
import { AuthService } from '../../../services';

@Service({ transient: true })
export class RegistrationViewModel extends ViewModel {
    private regApi = Container.get(AccountCreationAndConfirmationApi);
    private auth = Container.get(AuthService);

    @observable private userId: number | undefined;
    @observable step: 'chooseType' | 'enterData' | 'confirm' = 'chooseType';
    @observable name = '';
    @observable email = '';
    @observable phone = '';
    @observable password = '';
    @observable confirmCode = '';
    @observable registrationType: 'email' | 'phone' | undefined = undefined;

    @observable nameError = '';
    @observable emailError = '';
    @observable phoneError = '';
    @observable passwordError = '';
    @observable confirmCodeError = '';

    @observable isLoading = false;

    @computed get hasErrors() {
        return [
            this.nameError,
            this.emailError,
            this.phoneError,
            this.passwordError,
            this.confirmCodeError,
        ].some(Boolean);
    }

    constructor() {
        super();
        makeObservable(this);
    }

    @action onChangeName = (value: string) => {
        this.name = value;
        this.nameError = '';
    };

    @action onChangePhone = (value: string) => {
        this.phone = value;
        this.phoneError = '';
    };

    @action onChangeEmail = (value: string) => {
        this.email = value;
        this.emailError = '';
    };

    @action onChangePassword = (value: string) => {
        this.password = value;
        this.passwordError = '';
    };

    @action onChangeConfirmCode = (value: string) => {
        this.confirmCode = value;
        this.confirmCodeError = '';
    };

    @action setRegistrationType = (type?: 'email' | 'phone') => {
        this.registrationType = type;
        this.step = 'enterData';
    };

    @action onRegister = async () => {
        try {
            this.isLoading = true;
            const { user_id } = await this.regApi.authRegistrationCreate({
                first_name: this.name,
                email: this.registrationType === 'email' ? this.email : undefined,
                phone: this.phone,
                password: this.password,
            });

            if (user_id) {
                runInAction(() => {
                    this.userId = Number(user_id);
                    this.step = 'confirm';
                });
            }
        } catch (error) {
            runInAction(() => {
                if (isApiError<'first_name' | 'email' | 'password' | 'phone'>(error)) {
                    this.nameError = error.response?.data.first_name ?? '';
                    this.passwordError = error.response?.data.password ?? '';
                    this.phoneError = error.response?.data.phone ?? '';
                    this.emailError = error.response?.data.email ?? '';
                }
            });
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };

    @action onSendConfirmCode = async () => {
        if (!this.userId) return;
        this.isLoading = true;
        try {
            const actionFn =
                this.registrationType === 'email'
                    ? () => this.confirmEmail()
                    : () => this.confirmPhone();

            const user = await actionFn();
            this.auth.setUserInfo(user);
            Telegram.WebApp.showAlert('Пользователь успешно зарегистрирован', () => {
                Telegram.WebApp.close();
            });
        } catch (error) {
            runInAction(() => {
                if (isApiError<'code'>(error)) {
                    this.confirmCodeError = error.response?.data.code ?? '';
                }
            });
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };

    @action confirmEmail = () => {
        return this.regApi.authConfirmEmailRegCreate({
            user_id: this.userId!,
            code: +this.confirmCode,
            email: this.email,
        });
    };

    @action confirmPhone = () => {
        return this.regApi.authConfirmPhoneRegCreate({
            user_id: this.userId!,
            code: +this.confirmCode,
            phone: this.phone,
        });
    };
}
