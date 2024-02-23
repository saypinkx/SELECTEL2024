import { view } from '@yoskutik/react-vvm';
import { TelegramWebApp } from 'react-telegram-webapp';
import { AppViewModel } from './AppViewModel';
import { ThemeProvider, ToasterComponent, ToasterProvider } from '@gravity-ui/uikit';
import './App.css';
import { routes } from './router';
import { useMemo } from 'react';
import Container from 'typedi';
import { RouterService } from '../services';
import { RouterProvider } from 'react-router-dom';

async function validateHash() {
    return true;
}

export const App = view(AppViewModel)(() => {
    const router = useMemo(() => {
        return Container.get(RouterService).init(routes);
    }, []);

    return (
        <TelegramWebApp validateHash={validateHash}>
            <ThemeProvider theme="light">
                <ToasterProvider>
                    <RouterProvider router={router} />
                    <ToasterComponent />
                </ToasterProvider>
            </ThemeProvider>
        </TelegramWebApp>
    );
});
