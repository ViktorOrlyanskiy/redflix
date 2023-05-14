import React, { PropsWithChildren } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

interface IDismissKeyboard {}

export const DismissKeyboard: React.FC<PropsWithChildren<IDismissKeyboard>> = (
    props
) => {
    const { children, ...rest } = props;
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1 }} {...rest}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
};
