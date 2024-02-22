'use client';

import ClientError from '@/components/ClientError/ClientError';
import LoadingPage from '@/components/Loading/LoadingPage';
import RedirectFromEmail from '@/components/RedirectFromEmail/FormFromEmail';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function ApprovedPage() {
  useEffect(() => {
    sendBookRequest();
  }, []);

  const searchParams = useSearchParams();

  const current_app_id = searchParams.get('current_app_id');
  const open_app_id = searchParams.get('open_app_id');
  const last_name = searchParams.get('last_name');
  const first_name = searchParams.get('first_name');
  const email = searchParams.get('email');

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function sendBookRequest() {
    try {
      const response = await axios.put(
        `/api/appointment/reschedule/${current_app_id}`,
        {
          last_name,
          first_name,
          email,
          open_app_id,
        }
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
    <RedirectFromEmail message={'Your appointment is booked! See you soon!'} />
  );
}
