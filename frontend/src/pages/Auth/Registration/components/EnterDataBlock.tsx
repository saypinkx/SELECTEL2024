import { childView } from '@yoskutik/react-vvm';
import { RegistrationViewModel } from '../RegistrationViewModel';
import { Button } from '@gravity-ui/uikit';
import { Password, TextBox } from '../../../../shared/ui';
import * as styles from '../Registration.module.scss';

export const EnterDataBlock = childView<RegistrationViewModel>()(({ viewModel }) => (
    <form className={styles.block}>
        <div className={styles.inputs}>
            <TextBox
                size="xl"
                pin="round-round"
                autoFocus
                disabled={viewModel.isLoading}
                type={viewModel.registrationType === 'email' ? 'email' : 'tel'}
                placeholder={viewModel.registrationType === 'email' ? 'Email' : 'Телефон'}
                value={viewModel.registrationType === 'email' ? viewModel.email : viewModel.phone}
                errorMessage={
                    viewModel.registrationType === 'email'
                        ? viewModel.emailError
                        : viewModel.phoneError
                }
                onChange={
                    viewModel.registrationType === 'email'
                        ? viewModel.onChangeEmail
                        : viewModel.onChangePhone
                }
            />
            <Password
                value={viewModel.password}
                onUpdate={viewModel.onChangePassword}
                errorMessage={viewModel.passwordError}
                disabled={viewModel.isLoading}
                placeholder="Пароль"
                pin="round-round"
                size="xl"
                showRevealButton
            />
            <TextBox
                size="xl"
                pin="round-round"
                placeholder={'Имя'}
                disabled={viewModel.isLoading}
                value={viewModel.name}
                onChange={viewModel.onChangeName}
                errorMessage={viewModel.nameError}
            />
        </div>
        <Button
            view="action"
            pin="round-round"
            width="max"
            size="xl"
            type="submit"
            disabled={viewModel.hasErrors}
            onClick={viewModel.onRegister}
            loading={viewModel.isLoading}
        >
            Зарегистрироваться
        </Button>
    </form>
));
