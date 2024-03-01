'use client';

import ClientError from '@/components/ClientError/ClientError';
import LoadingPage from '@/components/Loading/LoadingPage';
import RedirectFromEmail from '@/components/RedirectFromEmail/FormFromEmail';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();

  const hash = searchParams.get('hash');
  const iv = searchParams.get('iv');

  useEffect(() => {
    sendConfirmRequest();
  }, []);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function sendConfirmRequest() {
    try {
      const response = await axios.put(
        `/api/appointment/confirm/${params.id}?hash=${hash}&iv=${iv}`
      );

      setLoading(false);
    } catch (error: any) {
      console.error(error.response.data.error);
      setLoading(false);
      setError(error.response.data.error);
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
      message={'Your appointment is confirmed! See you soon!'}
    />
  );
}
