import { Button } from '@gravity-ui/uikit';
import { Password, TextBox } from '../../../shared/ui';
import * as styles from './Login.module.scss';
import { view } from '@yoskutik/react-vvm';
import { LoginViewModel } from './LoginViewModel';

export const Login = view(LoginViewModel)(({ viewModel }) => {
    return (
        <form className={styles.container}>
            <div className={styles.inputs}>
                <TextBox
                    placeholder="Номер телефона или Email"
                    pin="round-round"
                    value={viewModel.login}
                    onChange={viewModel.onChangeLogin}
                    errorMessage={viewModel.loginError}
                    disabled={viewModel.isLoading}
                    alwaysShowError
                    autoFocus
                    size="xl"
                />
                <Password
                    value={viewModel.password}
                    onUpdate={viewModel.onChangePassword}
                    placeholder="Пароль"
                    pin="round-round"
                    disabled={viewModel.isLoading}
                    errorMessage={viewModel.passwordError}
                    alwaysShowError
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
                type="submit"
            >
                Войти
            </Button>
        </form>
    );
});
