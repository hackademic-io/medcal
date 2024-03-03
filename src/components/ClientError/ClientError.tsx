import React from "react";

interface IClientErrorProps {
  error: string;
}

const ClientError: React.FC<IClientErrorProps> = ({ error }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-6 gap-10">
        <div className="text-3xl font-bold">{error}</div>
      </div>
    </div>
  );
};

export default ClientError;
