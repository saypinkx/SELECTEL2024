import { Navigate, Route, Routes, createRoutesFromElements, useLocation } from 'react-router-dom';
import { AuthPage, BonusPage, BonusesPage, ProfilePage } from '../pages';
import { childView } from '@yoskutik/react-vvm';
import { AppViewModel } from './AppViewModel';
import { DonationPage } from '../pages/Donation/Donation';

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
    <Route path="/bonus" element={<BonusesPage />} />,
    <Route path="/bonus/:id" element={<BonusPage />} />,
    <Route path="/donation" element={<DonationPage />} />,
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
