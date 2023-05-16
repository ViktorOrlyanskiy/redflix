import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { PrivateNavigator } from './PrivateNavigator';

export const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <PrivateNavigator />
        </NavigationContainer>
    );
};
