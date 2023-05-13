import Admin from '@/components/screens/admin/Admin';
import Auth from '@/components/screens/auth/Auth';
import Home from '@/components/screens/home/Home';

import { IRoute } from './navigation.types';

export const adminRoutes: IRoute[] = [
    { name: 'Home', component: Home },
    { name: 'Auth', component: Auth },
    { name: 'Admin', component: Admin, isAdmin: true },
];
