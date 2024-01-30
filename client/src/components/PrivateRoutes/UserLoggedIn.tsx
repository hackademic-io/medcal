'use client';

import { useAuthContext } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function UserLoggedIn(Component: any) {
  return function UserLoggedIn(props: any) {
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      if (Object.keys(user).length !== 0) {
        router.push('/profile');
      }
    }, []);

    if (Object.keys(user).length !== 0) {
      return null;
    }

    return <Component {...props} />;
  };
}

export default UserLoggedIn;
