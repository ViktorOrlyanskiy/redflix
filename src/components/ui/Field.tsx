import cn from 'clsx';
import React from 'react';
import {
    Control,
    Controller,
    FieldPath,
    FieldValues,
    RegisterOptions,
} from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface IField<T extends FieldValues>
    extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
    control: Control<T>;
    name: FieldPath<T>;
    rules?: Omit<
        RegisterOptions<T, FieldPath<T>>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >;
}

export const Field = <T extends Record<string, any>>(
    props: IField<T>
): JSX.Element => {
    const { control, name, rules, className, ...rest } = props;

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
            }) => (
                <>
                    <View
                        className={cn(
                            'bg-[#232323] w-full border rounded-lg',
                            'py-3 px-4 my-2',
                            error ? 'border-red' : 'border-transparent'
                        )}
                    >
                        <TextInput
                            autoCapitalize='none'
                            value={(value || '').toString()}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            className='text-white text-base'
                            placeholderTextColor='#828282'
                            {...rest}
                        />
                    </View>
                    {error && <Text className='text-red'>{error.message}</Text>}
                </>
            )}
        />
    );
};
