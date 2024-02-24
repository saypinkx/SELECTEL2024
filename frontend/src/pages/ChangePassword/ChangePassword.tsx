import { useCallback, useEffect } from 'react';
import { Page, TextBox } from '../../shared/ui';
import { view } from '@yoskutik/react-vvm';
import { ChangePasswordViewModel } from './ChangePasswordViewModel';
import styles from './ChangePassword.module.scss';
import { useNavigate } from 'react-router';

export const ChangePassword = view(ChangePasswordViewModel)(({ viewModel }) => {
    const navigate = useNavigate();

    const goToBack = useCallback(() => navigate(-1), [navigate]);

    useEffect(() => {
        Telegram.WebApp.MainButton.setParams({
            color: '#27C175',
            text: 'Сохранить изменения',
            text_color: '#000',
        });
        Telegram.WebApp.BackButton.show();
        Telegram.WebApp.onEvent('mainButtonClicked', viewModel.saveNewPassword);
        Telegram.WebApp.onEvent('backButtonClicked', goToBack);

        return () => {
            Telegram.WebApp.MainButton.hide();
            Telegram.WebApp.BackButton.hide();
            Telegram.WebApp.offEvent('mainButtonClicked', viewModel.saveNewPassword);
            Telegram.WebApp.offEvent('backButtonClicked', goToBack);
        };
    }, [goToBack, viewModel.saveNewPassword]);

    return (
        <Page title="Изменить пароль" cls={styles.content}>
            <TextBox
                label="Текущий пароль"
                placeholder="Введите текущий пароль"
                size="xl"
                value={viewModel.oldPassword}
                onChange={viewModel.setOldPassword}
            />
            <TextBox
                label="Новый пароль"
                placeholder="Введите новый пароль"
                size="xl"
                value={viewModel.newPassword}
                onChange={viewModel.setNewPassword}
            />
        </Page>
    );
});
