'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function AuthRequired(Component: any) {
  return function whenLoggedIn(props: any) {
    const { user, isLoading } = useUser();
    const router = useRouter();

    if (isLoading) {
      return <></>;
    }

    useEffect(() => {
      if (!user) {
        router.push('/');
      }
    }, [user]);

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}

export default AuthRequired;
