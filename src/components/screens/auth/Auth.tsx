import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { useTypedNavigation } from '@/hooks/useTypedNavigate';

const Auth: React.FC = () => {
    const { navigate } = useTypedNavigation();

    return (
        <View>
            <Text>Auth</Text>
            <Pressable onPress={() => navigate('Home')}>
                <Text style={{ color: 'white' }}>Go to home</Text>
            </Pressable>
        </View>
    );
};

export default Auth;
