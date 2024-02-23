import { Button } from '@gravity-ui/uikit';
import { useState } from 'react';
import { TextBox } from '../../shared/ui';
import { validate, password as passwordValidator } from '../../shared/lib/Validator';
import * as styles from './Login.module.scss';

export const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onChangeLogin = (value: string) => {
        setLogin(value);
    };

    const onChangePassword = (value: string) => {
        const { errorMessage } = validate(value, passwordValidator);
        setPassword(value);
        setPasswordError(errorMessage);
    };

    const onLogin = () => {
        if (passwordError) return;
        console.log({
            login,
            password,
        });
    };

    return (
        <div className={styles.container}>
            <img src="/logo.svg" className={styles.logo} />
            <h1 className={styles.header}>Вход</h1>
            <div className={styles.inputs}>
                <TextBox
                    placeholder="Номер телефона или Email"
                    pin="brick-brick"
                    value={login}
                    onChange={onChangeLogin}
                    size="xl"
                />
                <TextBox
                    placeholder="Пароль"
                    pin="brick-brick"
                    value={password}
                    onChange={onChangePassword}
                    errorMessage={passwordError}
                    size="xl"
                />
            </div>
            <Button view="action" pin="brick-brick" width="max" size="l" onClick={onLogin}>
                Войти
            </Button>
        </div>
    );
};
