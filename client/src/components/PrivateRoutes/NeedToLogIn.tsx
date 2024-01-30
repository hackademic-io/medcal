'use client';

import { useAuthContext } from '@/context/auth-context';
import { AuthRequiredError } from '@/lib/exeptions';
import React, { useEffect } from 'react';

function NeedToLogIn(Component: any) {
  return function NeedToLogIn(props: any) {
    const { user } = useAuthContext();

    useEffect(() => {
      if (Object.keys(user).length === 0) {
        throw new AuthRequiredError();
      }
    }, []);

    if (Object.keys(user).length === 0) {
      return null;
    }

    return <Component {...props} />;
  };
}

export default NeedToLogIn;
