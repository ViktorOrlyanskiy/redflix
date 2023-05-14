import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { DismissKeyboard } from '@/components/ui/DismissKeyboard';
import { Loader } from '@/components/ui/Loader';

import { useTypedNavigation } from '@/hooks/useTypedNavigate';

import { IAuthFormData } from '@/shared/types/auth.interface';

import { AuthFields } from './AuthFields';

const Auth: React.FC = () => {
    const { navigate } = useTypedNavigation();
    const [isReg, setIsReg] = useState(false);
    const isLoading = false;

    const { handleSubmit, reset, control } = useForm<IAuthFormData>({
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<IAuthFormData> = ({ email, password }) => {
        console.log(email);
        console.log(password);
    };

    const changeIsReg = () => {
        setIsReg((val) => !val);
    };

    return (
        <DismissKeyboard>
            <View className='h-full items-center justify-center'>
                <View className='w-9/12'>
                    <Text className='text-center text-white text-4xl font-bold mb-4'>
                        {isReg ? 'Register' : 'Login'}
                    </Text>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <AuthFields control={control} isPassRequired />
                            <Button
                                variant='primary'
                                icon='film'
                                onPress={handleSubmit(onSubmit)}
                                className='mt-4'
                            >
                                Go to watch
                            </Button>
                            <View className='mt-4 flex-row justify-end'>
                                <Button
                                    variant='secondary'
                                    onPress={changeIsReg}
                                >
                                    {isReg ? 'Login' : 'Register'}
                                </Button>
                            </View>
                        </>
                    )}
                </View>
            </View>
        </DismissKeyboard>
    );
};

export default Auth;
