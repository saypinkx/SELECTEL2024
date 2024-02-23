import { Navigate, Route, Routes, createRoutesFromElements, useLocation } from 'react-router-dom';
import { AuthPage, ProfilePage } from '../pages';
import { childView } from '@yoskutik/react-vvm';
import { AppViewModel } from './AppViewModel';

const RequireAuth = childView<AppViewModel>()<{ children: JSX.Element }>(({
    viewModel,
    children,
}) => {
    const location = useLocation();
    if (!viewModel.auth.userIsAuthenticated) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    return children;
});

export const routes = createRoutesFromElements([
    <Route path="/auth" element={<AuthPage />} />,
    <Route
        index
        path="/*"
        element={
            <RequireAuth>
                <Routes>
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </RequireAuth>
        }
    />,
]);
