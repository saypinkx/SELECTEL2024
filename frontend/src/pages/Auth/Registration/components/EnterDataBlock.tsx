import { childView } from '@yoskutik/react-vvm';
import { RegistrationViewModel } from '../RegistrationViewModel';
import { Button } from '@gravity-ui/uikit';
import { Password, TextBox } from '../../../../shared/ui';
import * as styles from '../Registration.module.scss';

export const EnterDataBlock = childView<RegistrationViewModel>()(({ viewModel }) => (
    <div className={styles.block}>
        <div className={styles.inputs}>
            <TextBox
                size="xl"
                pin="round-round"
                placeholder={viewModel.registrationType === 'email' ? 'Email' : 'Телефон'}
                value={viewModel.registrationType === 'email' ? viewModel.email : viewModel.phone}
                onChange={
                    viewModel.registrationType === 'email'
                        ? viewModel.onChangeEmail
                        : viewModel.onChangePhone
                }
            />
            <Password
                value={viewModel.password}
                onUpdate={viewModel.onChangePassword}
                placeholder="Пароль"
                pin="round-round"
                errorMessage={viewModel.passwordError}
                size="xl"
                showRevealButton
            />
        </div>
        <Button
            view="action"
            pin="round-round"
            width="max"
            size="xl"
            onClick={viewModel.onRegister}
        >
            Зарегистрироваться
        </Button>
    </div>
));
