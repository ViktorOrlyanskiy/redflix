import Admin from '@/components/screens/admin/Admin';
import Auth from '@/components/screens/auth/Auth';
import Home from '@/components/screens/home/Home';

import { IRoute } from './navigation.types';

export const userRoutes: IRoute[] = [
    { name: 'Home', component: Home },
    { name: 'Auth', component: Auth },
];

export const adminRoutes: IRoute[] = [
    { name: 'Admin', component: Admin, isAdmin: true },
];

export const routes = [...userRoutes, ...adminRoutes];
