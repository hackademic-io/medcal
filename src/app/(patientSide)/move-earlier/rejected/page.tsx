'use client';

import ClientError from '@/components/ClientError/ClientError';
import LoadingPage from '@/components/Loading/LoadingPage';
import RedirectFromEmail from '@/components/RedirectFromEmail/FormFromEmail';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function RejectedPage() {
  useEffect(() => {
    sendRejectToNotificationService();
  }, []);

  const searchParams = useSearchParams();

  const hash = searchParams.get('hash');
  const encryptionIV = searchParams.get('iv');

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function sendRejectToNotificationService() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_NOTIFICATION_URL}/notification/rescheduling-reject`,
        { hash, encryptionIV }
      );
      setLoading(false);
    } catch (error: any) {
      console.error(error.response.data.error);
      setLoading(false);
      setError(
        error.response.data.error ||
          'Something went wrong, please try again later'
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
      message={'You rejected the new slot! We will not contact you again!'}
    />
  );
}
