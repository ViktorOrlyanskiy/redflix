import { Feather } from '@expo/vector-icons';
import cn from 'clsx';
import { LinearGradient } from 'expo-linear-gradient';
import React, { PropsWithChildren } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

import { TypeFeatherIconNames } from '@/shared/types/icon.interface';

interface IButton extends PressableProps {
    variant: 'primary' | 'secondary';
    className?: string;
    icon?: TypeFeatherIconNames;
}

export const Button: React.FC<PropsWithChildren<IButton>> = (props) => {
    const { variant, className, icon, children, ...rest } = props;

    if (variant === 'secondary') {
        return (
            <Pressable className={cn('self-center py-1 px-1')} {...rest}>
                <Text
                    className={cn(
                        'text-center text-white opacity-30 text-base',
                        className
                    )}
                >
                    {children}
                </Text>
            </Pressable>
        );
    }

    return (
        <Pressable className={cn('self-center', className)} {...rest}>
            <LinearGradient
                start={{ x: 0, y: 0.75 }}
                end={{ x: 1, y: 0.25 }}
                colors={['#dc3f41', '#a6282b']}
                className={cn('w-full py-3 px-8 rounded-2xl items-center', {
                    'flex-row': !!icon,
                })}
            >
                {icon && <Feather name={icon} size={18} color='white' />}
                <Text
                    className={cn(
                        'text-center text-white font-medium text-lg',
                        { 'ml-2': !!icon }
                    )}
                >
                    {children}
                </Text>
            </LinearGradient>
        </Pressable>
    );
};
