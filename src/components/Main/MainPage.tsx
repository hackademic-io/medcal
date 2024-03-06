"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";

const MainPage = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="h-full flex flex-col justify-center items-center text-center ">
      <div>
        <h1 className="text-6xl max-w-3xl leading-none mb-6">
          Welcome to <span className="font-bold text-blue-600">MedPoint</span>{" "}
          <br />
          Smart app to manage your medical appointments
        </h1>
        <div className="text-3xl flex-col flex items-center justify-center">
          To continue, please{" "}
          {user ? (
            <Link href="/dashboard" className="blue_btn mt-6 w-1/3 h-20">
              Go to profile
            </Link>
          ) : (
            <a
              href="/api/auth/login"
              className={`blue_btn mt-6 w-1/3 h-20 ${isLoading ? "pointer-events-none opacity-50" : ""}`}
            >
              {isLoading ? "Loading..." : "Log in / Sign up"}
            </a>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
