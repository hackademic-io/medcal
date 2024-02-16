import Link from 'next/link';
import React, { useState } from 'react';

const DashboardPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Link href="/schedule" className="blue_btn mt-6 w-1/3 h-16">
          Schedule an appointment
        </Link>
      </div>

      <div>
        <h1 className="text-4xl font-bold mt-4">Appointments</h1>
        <div>List of appointments</div>
      </div>
    </div>
  );
};

export default DashboardPage;
