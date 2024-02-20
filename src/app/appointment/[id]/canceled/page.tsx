'use client';

import ClientError from '@/components/ClientError/ClientError';
import LoadingPage from '@/components/Loading/LoadingPage';
import RedirectFromEmail from '@/components/RedirectFromEmail/FormFromEmail';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  useEffect(() => {
    sendCancelRequest();
  }, []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function sendCancelRequest() {
    try {
      const response = await axios.delete(`/api/appointment/${params.id}`);
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
      message={'Your appointment is canceled! Have a great day!'}
      appointmentId={params.id}
    />
  );
}
