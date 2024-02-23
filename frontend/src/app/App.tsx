import { view } from '@yoskutik/react-vvm';
import { TelegramWebApp } from 'react-telegram-webapp';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppViewModel } from './AppViewModel';
import { Login } from '../pages';
import './App.css';
import { ThemeProvider, ToasterProvider } from '@gravity-ui/uikit';

async function validateHash() {
    return true;
}

export const App = view(AppViewModel)(() => {
    return (
        <TelegramWebApp validateHash={validateHash}>
            <ThemeProvider theme="light">
                <ToasterProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<Login />} />
                        </Routes>
                    </BrowserRouter>
                </ToasterProvider>
            </ThemeProvider>
        </TelegramWebApp>
    );
});
