"use client";

import ClientError from "@/components/ClientError/ClientError";
import LoadingPage from "@/components/Loading/LoadingPage";
import RedirectFromEmail from "@/components/RedirectFromEmail/FormFromEmail";
import { APPOINTMENT_URL } from "@/config/config";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";

export default function Page() {
  return (
    <Suspense fallback={<LoadingPage message="Loading..." />}>
      <InnerPage />
    </Suspense>
  );
}
function InnerPage() {
  const searchParams = useSearchParams();
  const hash = searchParams.get("hash");
  const encryptionIV = searchParams.get("iv");

  useEffect(() => {
    mutation.mutate();
  }, []);

  const mutation = useMutation<
    unknown,
    { response?: { data: { error: string } } }
  >({
    mutationFn: async () =>
      await axios.put(`${APPOINTMENT_URL}/patient/appointment/confirm`, {
        hash,
        encryptionIV,
      }),
  });

  const errorMessage =
    mutation.error?.response?.data.error || "Something went wrong";

  if (mutation.isPending) {
    return <LoadingPage message={"Your request is proceeding..."} />;
  }

  if (mutation.isError) {
    return <ClientError error={errorMessage} />;
  }

  if (mutation.isSuccess) {
    return (
      <RedirectFromEmail
        message={"Your appointment is confirmed! See you soon!"}
      />
    );
  }
}
