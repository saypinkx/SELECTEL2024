import { Button } from '@gravity-ui/uikit';
import { Password, TextBox } from '../../../shared/ui';
import * as styles from './Login.module.scss';
import { view } from '@yoskutik/react-vvm';
import { LoginViewModel } from './LoginViewModel';

export const Login = view(LoginViewModel)(({ viewModel }) => {
    return (
        <div className={styles.container}>
            <div className={styles.inputs}>
                <TextBox
                    placeholder="Номер телефона или Email"
                    pin="round-round"
                    value={viewModel.login}
                    onChange={viewModel.onChangeLogin}
                    errorMessage={viewModel.loginError}
                    disabled={viewModel.isLoading}
                    size="xl"
                />
                <Password
                    value={viewModel.password}
                    onUpdate={viewModel.onChangePassword}
                    placeholder="Пароль"
                    pin="round-round"
                    disabled={viewModel.isLoading}
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
                onClick={viewModel.onLogin}
                loading={viewModel.isLoading}
                disabled={viewModel.hasErrors}
            >
                Войти
            </Button>
        </div>
    );
});
