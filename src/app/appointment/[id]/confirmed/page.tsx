'use client';

import LoadingPage from '@/components/Loading/LoadingPage';
import RedirectFromEmail from '@/components/RedirectFromEmail/FormFromEmail';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  useEffect(() => {
    sendConfirmRequest();
  }, []);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function sendConfirmRequest() {
    try {
      const response = await axios.put(`/api/appointment/${params.id}`, {
        status: 'CONFIRMED',
      });
      const data = await response.data;
      if (response.status === 200) {
        setLoading(false);
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error(error);
      setError('Error confirming appointment');
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <RedirectFromEmail
          message={'Your appointment is confirmed! See you soon!'}
          appointmentId={params.id}
        />
      )}
    </>
  );
}
