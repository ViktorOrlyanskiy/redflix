import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { useTypedNavigation } from '@/hooks/useTypedNavigate';

const Home: React.FC = () => {
    const { navigate } = useTypedNavigation();

    return (
        <View>
            <Text className='mb-10 pt-10 text-white'>Home</Text>

            <Pressable onPress={() => navigate('Auth')}>
                <Text className='mb-10 text-white'>Go to auth</Text>
            </Pressable>
        </View>
    );
};

export default Home;
