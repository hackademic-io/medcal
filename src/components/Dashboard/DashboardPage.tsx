import { IAppointmentProps } from '@/types/appointment.interface';
import { IDashboardPageProps } from '@/types/dashboard.interface';
import Link from 'next/link';
import React from 'react';

const DashboardPage: React.FC<IDashboardPageProps> = ({
  appointments,
  loading,
}) => {
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
        <div className="mt-4">
          {loading ? (
            'Loading...'
          ) : (
            <>
              {' '}
              {appointments.map((app: IAppointmentProps, index: number) => (
                <div key={index}>{app.email}</div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
