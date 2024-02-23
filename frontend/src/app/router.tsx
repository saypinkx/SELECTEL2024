import { Route, createRoutesFromElements } from 'react-router-dom';
import { AuthPage } from '../pages';

export const routes = createRoutesFromElements([<Route path="/auth" element={<AuthPage />} />]);
