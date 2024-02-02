'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AuthForm from '../../../components/AuthForm/AuthForm';
import { FieldValues } from 'react-hook-form';
import { useAuthContext } from '@/context/auth-context';
import UserLoggedIn from '@/components/PrivateRoutes/UserLoggedIn';

const LogIn = () => {
  const router = useRouter();
  const [authError, setAuthError] = useState('');

  const { login } = useAuthContext();

  const loginUser = async (data: FieldValues) => {
    try {
      const response = await login(data.email, data.password);
      if (response.status !== 200) {
        console.log(response);
        const responseMessage = await response.data.message;
        setAuthError(responseMessage);
      } else {
        setAuthError('');
        router.push('/profile');
      }
    } catch (error) {
      console.error('Error during sig in:', error);
      setAuthError('An error occurred. Please try again.');
    }
  };

  return <AuthForm onSubmit={loginUser} type={'signin'} error={authError} />;
};

export default UserLoggedIn(LogIn);
