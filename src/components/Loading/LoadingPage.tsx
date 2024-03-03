import React from "react";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

const LoadingPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex gap-10 items-center">
        <LoadingSpinner />
        <p className="text-5xl">Your request is proceeding...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
