"use client";

import ClientError from "@/components/ClientError/ClientError";
import LoadingPage from "@/components/Loading/LoadingPage";
import RedirectFromEmail from "@/components/RedirectFromEmail/FormFromEmail";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ApprovedPage() {
  useEffect(() => {
    sendBookRequest();
  }, []);

  const searchParams = useSearchParams();

  const hash = searchParams.get("hash");
  const encryptionIV = searchParams.get("iv");

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function sendBookRequest() {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_APPOINTMENT_URL}/patient/appointment/reschedule`,
        { hash, encryptionIV },
      );

      setLoading(false);
    } catch (error: any) {
      console.error(error.response.data.error);
      setLoading(false);
      setError(
        error.response.data.error ||
          "Something went wrong, please try again later",
      );
    }
  }

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ClientError error={error} />;
  }

  return (
    <RedirectFromEmail
      message={
        "Your new appointment is booked! Your previous appointment will be canceled!"
      }
    />
  );
}
