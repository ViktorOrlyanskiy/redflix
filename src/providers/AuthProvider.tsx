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

type TypeUserState = IUser | null;

interface IContext {
    user: TypeUserState;
    setUser: Dispatch<SetStateAction<TypeUserState>>;
}

SplashScreen.preventAutoHideAsync();
export const AuthContext = createContext({} as IContext);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<TypeUserState>(null);
    useEffect(() => {
        let mounted = true;

        const checkAccessToken = async () => {
            try {
            } catch (error) {
            } finally {
                await SplashScreen.hideAsync();
            }
        };
        checkAccessToken();
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
