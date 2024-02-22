'use client';

import ClientError from '@/components/ClientError/ClientError';
import LoadingPage from '@/components/Loading/LoadingPage';
import RedirectFromEmail from '@/components/RedirectFromEmail/FormFromEmail';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function RejectedPage() {
  useEffect(() => {
    sendRejectRequest();
  }, []);

  const searchParams = useSearchParams();

  const current_app_id = searchParams.get('current_app_id');
  const open_app_id = searchParams.get('open_app_id');

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function sendRejectRequest() {
    // Here will be a request to http://localhost:3001/notification/rescheduling-reject.
    // current_app_id: it's the appoinment ID from where we take patient email, we pass it to change open_to_earlier to false to stop reaching out to this patient in the future.
    // open_app_id: It's the ID of the appointment that we're trying to find a new patient for. We pass it to the request to put it back in queue.
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
