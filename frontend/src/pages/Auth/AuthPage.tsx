import { Tabs } from '@gravity-ui/uikit';
import { useState } from 'react';
import { Registration } from './Registration';
import { Login } from './Login';
import * as styles from './AuthPage.module.scss';

export const AuthPage = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'reg'>('login');
    return (
        <div className={styles.container}>
            <img src="/logo.svg" className={styles.logo} />
            <Tabs
                size="xl"
                className={styles.tabs}
                activeTab={activeTab}
                onSelectTab={id => setActiveTab(id as 'login' | 'reg')}
                items={[
                    {
                        id: 'login',
                        title: 'Вход',
                    },
                    {
                        id: 'reg',
                        title: 'Регистрация',
                    },
                ]}
            />
            <div>
                {activeTab === 'login' && <Login />}
                {activeTab === 'reg' && <Registration />}
            </div>
        </div>
    );
};
