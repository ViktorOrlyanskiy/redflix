import * as SplashScreen from 'expo-splash-screen';
import React, {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from 'react';

import { IUser } from '@/shared/types/user.interface';

import {
    getAccessToken,
    getUserFromStorage,
} from '@/services/auth/auth.helper';

type TypeUserState = IUser | null;

interface IContext {
    user: TypeUserState;
    setUser: Dispatch<SetStateAction<TypeUserState>>;
}

SplashScreen.preventAutoHideAsync();
export const AuthContext = createContext({} as IContext);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<TypeUserState>({} as IUser);
    useEffect(() => {
        let isMounted = true;

        const checkAccessToken = async () => {
            try {
                const accessToken = await getAccessToken();
                if (accessToken) {
                    const user = await getUserFromStorage();
                    if (isMounted) setUser(user);
                }
            } catch (error) {
            } finally {
                await SplashScreen.hideAsync();
            }
        };
        checkAccessToken();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
