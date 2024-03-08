"use client";

import ClientError from "@/components/ClientError/ClientError";
import LoadingPage from "@/components/Loading/LoadingPage";
import RedirectFromEmail from "@/components/RedirectFromEmail/FormFromEmail";
import { APPOINTMENT_URL } from "@/config/config";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const hash = searchParams.get("hash") as string;
  const encryptionIV = searchParams.get("iv") as string;

  useEffect(() => {
    mutation.mutate();
  }, []);

  const mutation = useMutation<
    unknown,
    { response?: { data: { error: string } } }
  >({
    mutationFn: async () =>
      await axios.delete(`${APPOINTMENT_URL}/patient/appointment/cancel`, {
        data: { hash, encryptionIV },
      }),
  });

  const errorMessage =
    mutation.error?.response?.data.error || "Something went wrong";

  if (mutation.isPending) {
    return <LoadingPage />;
  }

  if (mutation.isError) {
    return <ClientError error={errorMessage} />;
  }

  if (mutation.isSuccess) {
    return (
      <RedirectFromEmail
        message={"Your appointment is canceled! Have a great day!"}
      />
    );
  }
}
