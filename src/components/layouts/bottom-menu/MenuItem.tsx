import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { getColor } from '@/config/colors.config';

import { IMenuItem } from './BottomMenu';
import { TypeRootStackParamList } from '@/navigation/navigation.types';

interface Props {
    item: IMenuItem;
    nav: (screenName: keyof TypeRootStackParamList) => void;
    currentRoute?: string;
}

export const MenuItem: React.FC<Props> = (props) => {
    const { item, nav, currentRoute } = props;
    const isActive = currentRoute === item.path;

    return (
        <Pressable
            onPress={() => nav(item.path)}
            className='items-center w-[20%]'
        >
            <Feather
                name={item.iconName}
                size={26}
                color={isActive ? getColor('primary') : getColor('gray.400')}
            />
        </Pressable>
    );
};
