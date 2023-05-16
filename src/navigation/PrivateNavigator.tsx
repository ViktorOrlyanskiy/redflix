import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Auth from '@/components/screens/auth/Auth';
import { NotFound } from '@/components/screens/not-found/NotFound';

import { useAuth } from '@/hooks/useAuth';

import { TypeRootStackParamList } from './navigation.types';
import { routes } from './routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const PrivateNavigator: React.FC = () => {
    const { user } = useAuth();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#090909',
                },
            }}
        >
            {user ? (
                routes.map((route) =>
                    user.isAdmin || !route.isAdmin ? (
                        <Stack.Screen key={route.name} {...route} />
                    ) : (
                        <Stack.Screen
                            key='NotFound'
                            name='NotFound'
                            component={NotFound}
                        />
                    )
                )
            ) : (
                <Stack.Screen key='Auth' name='Auth' component={Auth} />
            )}
        </Stack.Navigator>
    );
};
