import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TypeRootStackParamList } from './navigation.types';
import { userRoutes } from './user.routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: '#090909',
                    },
                }}
            >
                {userRoutes.map((route) => (
                    <Stack.Screen key={route.name} {...route} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
