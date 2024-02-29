'use client';

import AuthRequired from '@/components/Routes/AuthRequired';
import SuccessPage from '@/components/Success/SuccessPage';
import React from 'react';

const Success = () => {
  return (
    <>
      <SuccessPage />
    </>
  );
};

export default AuthRequired(Success);
