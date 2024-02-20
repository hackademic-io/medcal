import RedirectFromEmail from '@/components/RedirectFromEmail/FormFromEmail';
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <RedirectFromEmail
        message={'Your appointment is canceled! Have a great day!'}
        appointmentId={params.id}
      />
    </>
  );
}
