"use client";

import ClientError from "@/components/ClientError/ClientError";
import LoadingPage from "@/components/Loading/LoadingPage";
import RedirectFromEmail from "@/components/RedirectFromEmail/FormFromEmail";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const searchParams = useSearchParams();

  useEffect(() => {
    mutation.mutate();
  }, []);

  const hash = searchParams.get("hash") as string;
  const encryptionIV = searchParams.get("iv") as string;

  const mutation = useMutation<
    unknown,
    { response?: { data: { error: string } } }
  >({
    mutationFn: async () =>
      await axios.delete(
        `${process.env.NEXT_PUBLIC_APPOINTMENT_URL}/patient/appointment/cancel`,
        {
          data: { hash, encryptionIV },
        }
      ),
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

// {
//   hash: 'YmJiNDZmZjZmOTFmZmJlY2RlZTg0MjFiZGJjNzZjNTc4ZDA0N2JlNjE2MzZjMTM5NGI0YWMwYmVjODI2NDgwYWMxMGUwYjQ5NWFkMzAxMzdjOGJiNDJiM2VlOGUxYTNmM2NmNTA5ZTY1OThjNTllOGQ1OWJmMjI2ODczZWI2N2FlN2U2MDFiMDM2ODQ5NDBjOWRmZGY5YTc5N2ZmNWExZWNkZmYzNjVmY2IyODQzNzVjNTM3MTk3YjFlZWRiZmM3',
//   encryptionIV: '4fa363a911c2e8fa'
// }
