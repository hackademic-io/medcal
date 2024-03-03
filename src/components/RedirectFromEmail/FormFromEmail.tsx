"use client";

import React from "react";

interface IRedirectFromEmailProps {
  message: string;
}
const RedirectFromEmail: React.FC<IRedirectFromEmailProps> = ({ message }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-6 gap-10">
        <div className="text-3xl font-bold">{message}</div>
        <div className="text-xl">Now you can close this page</div>
      </div>
    </div>
  );
};

export default RedirectFromEmail;
