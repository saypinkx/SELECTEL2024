import { useEffect } from 'react';
import { Page, TextBox } from '../../shared/ui';
import { view } from '@yoskutik/react-vvm';
import { ChangePasswordViewModel } from './ChangePasswordViewModel';
import styles from './ChangePassword.module.scss';

export const ChangePassword = view(ChangePasswordViewModel)(({ viewModel }) => {
    useEffect(() => {
        Telegram.WebApp.MainButton.setParams({
            color: '#27C175',
            text: 'Сохранить изменения',
            text_color: '#000',
            is_visible: true,
        });
        Telegram.WebApp.onEvent('mainButtonClicked', viewModel.saveNewPassword);

        return () => {
            Telegram.WebApp.MainButton.hide();
            Telegram.WebApp.offEvent('mainButtonClicked', viewModel.saveNewPassword);
        };
    }, [viewModel.saveNewPassword]);

    return (
        <Page title="Изменить пароль" cls={styles.content}>
            <TextBox label="Текущий пароль" placeholder="Введите текущий пароль" size="xl" />
            <TextBox label="Новый пароль" placeholder="Введите новый пароль" size="xl" />
        </Page>
    );
});
