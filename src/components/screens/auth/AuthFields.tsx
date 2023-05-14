import React from 'react';
import { Control } from 'react-hook-form';

import { Field } from '@/components/ui/Field';

import { validEmail } from '@/shared/consts/validEmail';
import { IAuthFormData } from '@/shared/types/auth.interface';

interface IAuthFields {
    control: Control<IAuthFormData>;
    isPassRequired?: boolean;
}

export const AuthFields: React.FC<IAuthFields> = (props) => {
    const { control, isPassRequired } = props;
    return (
        <>
            <Field<IAuthFormData>
                control={control}
                name='email'
                placeholder='Enter email'
                keyboardType='email-address'
                rules={{
                    required: 'Email is required!',
                    pattern: {
                        value: validEmail,
                        message: 'Please enter a valid email address',
                    },
                }}
            />

            <Field<IAuthFormData>
                control={control}
                name='password'
                placeholder='Enter password'
                rules={
                    isPassRequired
                        ? {
                              required: 'Password is required!',
                              minLength: {
                                  value: 6,
                                  message:
                                      'Password should be min 6 characters long',
                              },
                          }
                        : undefined
                }
            />
        </>
    );
};
