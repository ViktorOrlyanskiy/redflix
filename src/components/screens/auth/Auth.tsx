import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Loader } from '@/components/ui/Loader';

import { useTypedNavigation } from '@/hooks/useTypedNavigate';

import { IAuthFormData } from '@/shared/types/auth.interface';

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

    return (
        <View className='h-full items-center justify-center border-solid border-2 border-red'>
            <View className='w-9/12 border-solid border-2 border-red'>
                <Text className='text-center text-white text-4xl font-bold mb-3'>
                    {isReg ? 'Register' : 'Login'}
                </Text>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <Button
                            variant='primary'
                            icon='film'
                            onPress={handleSubmit(onSubmit)}
                        >
                            Go to watch
                        </Button>
                        <View className='mt-3 flex-row justify-end'>
                            <Button variant='secondary'>
                                {isReg ? 'Login' : 'Register'}
                            </Button>
                        </View>
                    </>
                )}
            </View>
        </View>
    );
};

export default Auth;
