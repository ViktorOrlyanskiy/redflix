import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { BottomMenu } from '@/components/layouts/bottom-menu/BottomMenu';

import { useAuth } from '@/hooks/useAuth';

import { PrivateNavigator } from './PrivateNavigator';

export const Navigation: React.FC = () => {
    const { user } = useAuth();
    const [currentRoute, setCurrentRoute] = useState<string>();
    const navRef = useNavigationContainerRef();

    useEffect(() => {
        setCurrentRoute(navRef.getCurrentRoute()?.name);

        const listener = navRef.addListener('state', () => {
            setCurrentRoute(navRef.getCurrentRoute()?.name);
        });

        return () => {
            navRef.removeListener('state', listener);
        };
    }, []);

    return (
        <>
            <NavigationContainer ref={navRef}>
                <PrivateNavigator />
            </NavigationContainer>
            {user && currentRoute && (
                <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
            )}
        </>
    );
};
