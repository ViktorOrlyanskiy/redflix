import Admin from '@/components/screens/admin/Admin';
import Auth from '@/components/screens/auth/Auth';
import Favorites from '@/components/screens/favorites/Favorites';
import Home from '@/components/screens/home/Home';
import Profile from '@/components/screens/profile/Profile';
import Search from '@/components/screens/search/Search';
import Trending from '@/components/screens/trending/Trending';

import { IRoute } from './navigation.types';

export const userRoutes: IRoute[] = [
    { name: 'Home', component: Home },
    { name: 'Auth', component: Auth },
    { name: 'Trending', component: Trending },
    { name: 'Search', component: Search },
    { name: 'Favorites', component: Favorites },
    { name: 'Profile', component: Profile },
];

export const adminRoutes: IRoute[] = [
    { name: 'Admin', component: Admin, isAdmin: true },
];

export const routes = [...userRoutes, ...adminRoutes];
