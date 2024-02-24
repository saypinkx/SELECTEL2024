import { view } from '@yoskutik/react-vvm';
import { AppViewModel } from './AppViewModel';
import { ThemeProvider, ToasterComponent, ToasterProvider } from '@gravity-ui/uikit';
import './App.css';
import { routes } from './router';
import { useMemo } from 'react';
import Container from 'typedi';
import { RouterService } from '../services';
import { RouterProvider } from 'react-router-dom';

export const App = view(AppViewModel)(() => {
    const router = useMemo(() => {
        return Container.get(RouterService).init(routes);
    }, []);

    return (
        <ThemeProvider theme="light">
            <ToasterProvider>
                <RouterProvider router={router} />
                <ToasterComponent />
            </ToasterProvider>
        </ThemeProvider>
    );
});
