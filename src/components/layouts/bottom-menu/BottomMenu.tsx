import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TypeFeatherIconNames } from '@/shared/types/icon.interface';

import { MenuItem } from './MenuItem';
import { TypeRootStackParamList } from '@/navigation/navigation.types';

export interface IMenuItem {
    iconName: TypeFeatherIconNames;
    path: keyof TypeRootStackParamList;
}
const menuItems: IMenuItem[] = [
    { iconName: 'home', path: 'Home' },
    { iconName: 'bar-chart', path: 'Trending' },
    { iconName: 'search', path: 'Search' },
    { iconName: 'heart', path: 'Favorites' },
    { iconName: 'user', path: 'Profile' },
];

interface IBottomMenu {
    nav: (screenName: keyof TypeRootStackParamList) => void;
    currentRoute?: string;
}

export const BottomMenu: React.FC<IBottomMenu> = (props) => {
    const { bottom } = useSafeAreaInsets();

    return (
        <View
            className='pt-2 px-2 flex-row justify-between items-center w-full border-t border-solid-t border-t-[#929292] bg-[#090909]'
            style={{ paddingBottom: bottom + 5 }}
        >
            {menuItems.map((item) => (
                <MenuItem key={item.path} item={item} {...props} />
            ))}
        </View>
    );
};
