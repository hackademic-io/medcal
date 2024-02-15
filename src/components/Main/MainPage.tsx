'use client';

import React from 'react';

const MainPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center ">
      <div>
        <h1 className="text-6xl max-w-3xl leading-none mb-6">
          Welcome to <span className="font-bold text-blue-600">MedPoint</span>{' '}
          <br />
          Smart app to manage your medical appointments
        </h1>
        <div className="text-3xl flex-col flex items-center justify-center">
          To continue, please{' '}
          <a href="/api/auth/login" className="blue_btn mt-6 w-1/3 h-20">
            Log in
          </a>{' '}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
