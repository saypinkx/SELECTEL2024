import { Navigate, Route, Routes, createRoutesFromElements, useLocation } from 'react-router-dom';
import { childView } from '@yoskutik/react-vvm';
import { AppViewModel } from './AppViewModel';
import { Suspense, lazy } from 'react';
import { Loader } from '@gravity-ui/uikit';

const AuthPage = lazy(() => import('../pages/Auth'));
const BonusesPage = lazy(() => import('../pages/Bonuses'));
const BonusPage = lazy(() => import('../pages/Bonus'));
const DonationPage = lazy(() => import('../pages/Donation'));
const ProfilePage = lazy(() => import('../pages/Profile'));

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
                    <Suspense fallback={<Loader size="l" />}>
                        <Route path="/bonus" element={<BonusesPage />} />,
                        <Route path="/bonus/:id" element={<BonusPage />} />,
                        <Route path="/donation" element={<DonationPage />} />,
                        <Route path="/profile" element={<ProfilePage />} />
                    </Suspense>
                </Routes>
            </RequireAuth>
        }
    />,
]);
