import { useEffect } from 'react';

import { errorCatch } from '@/services/api/error.api';
import { getNewTokens } from '@/services/api/helper.auth';
import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';

import { useAuth } from './useAuth';

export const useCheckAuth = (routeName?: string) => {
    const { user, setUser } = useAuth();

    // загрузка app
    useEffect(() => {
        const checkAccessToken = async () => {
            const accessToken = await getAccessToken();

            if (accessToken) {
                try {
                    await getNewTokens();
                } catch (error) {
                    if (errorCatch(error) === 'jwt expired') {
                        await AuthService.logout();
                        setUser(null);
                    }
                }
            }
        };

        checkAccessToken();
    }, []);

    // изменение route
    useEffect(() => {
        const checkRefreshToken = async () => {
            const refreshToken = await getRefreshToken();

            if (!refreshToken && user) {
                await AuthService.logout();
                setUser(null);
            }
        };

        checkRefreshToken();
    }, [routeName]);
};
