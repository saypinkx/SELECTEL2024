import { view } from '@yoskutik/react-vvm';
import { TelegramWebApp } from 'react-telegram-webapp';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppViewModel } from './AppViewModel';
import { First, Main, Second } from '../pages';

async function validateHash() {
    return true;
}

export const App = view(AppViewModel)(() => {
    return (
        <TelegramWebApp validateHash={validateHash}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path="/first/" element={<First />} />
                    <Route path="/second/" element={<Second />} />
                </Routes>
            </BrowserRouter>
        </TelegramWebApp>
    );
});
