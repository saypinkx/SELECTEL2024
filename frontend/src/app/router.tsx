import { Navigate, Route, Routes, createRoutesFromElements, useLocation } from 'react-router-dom';
import {
    AuthPage,
    BonusPage,
    BonusesPage,
    DonationPage,
    DonationsPage,
    ProfilePage,
    TopPage,
} from '../pages';
import { childView } from '@yoskutik/react-vvm';
import { AppViewModel } from './AppViewModel';
import { ChangePassword } from '../pages/ChangePassword/ChangePassword';

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
        path="*"
        element={
            <RequireAuth>
                <Routes>
                    <Route path="/donation/:type?/:id?" element={<DonationPage />} />,
                    <Route path="/donations/" element={<DonationsPage />} />,
                    <Route path="/profile/change-password" element={<ChangePassword />} />
                    <Route path="/bonus/:id" element={<BonusPage />} />,
                    <Route path="/bonus" element={<BonusesPage />} />,
                    <Route path="/top" element={<TopPage />} />,
                    <Route path="/*" element={<ProfilePage />} />
                </Routes>
            </RequireAuth>
        }
    />,
]);
