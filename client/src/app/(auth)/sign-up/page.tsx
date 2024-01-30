'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AuthForm from '../../../components/AuthForm/AuthForm';
import { FieldValues } from 'react-hook-form';
import { useAuthContext } from '@/context/auth-context';
import UserLoggedIn from '@/components/PrivateRoutes/UserLoggedIn';

const SignUp = () => {
  const router = useRouter();
  const [authError, setAuthError] = useState('');

  const { registration } = useAuthContext();

  const signUpNewUser = async (data: FieldValues) => {
    try {
      const response = await registration(
        data.email,
        data.password,
        data.name,
        data.lastName,
        data.role
      );

      if (response.status !== 200) {
        console.log(response);
        const responseMessage = await response.data.message;
        setAuthError(responseMessage);
      } else {
        setAuthError('');
        router.push('/');
      }
    } catch (error) {
      console.error('Error during sigup:', error);
      setAuthError('An error occurred. Please try again.');
    }
  };

  return (
    <AuthForm onSubmit={signUpNewUser} type={'signup'} error={authError} />
  );
};

export default UserLoggedIn(SignUp);
