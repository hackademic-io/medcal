import { IAppointmentProps } from '@/types/appointment.interface';
import { IDashboardPageProps } from '@/types/dashboard.interface';
import Link from 'next/link';
import React from 'react';
import AppointmentCard from './AppointmentCard';

const DashboardPage: React.FC<IDashboardPageProps> = ({
  appointments,
  loading,
  deleteAppointment,
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
            <div className="mb-4">
              <div className="grid grid-cols-[1fr_1fr_1.5fr_1fr_1fr_1fr] mb-2 text-xl font-semibold">
                <p>Fisrt name</p>
                <p>Last Name</p>
                <p>Email</p>
                <p>Date</p>
                <p>Time</p>
              </div>
              {appointments.map((app: IAppointmentProps, index: number) => (
                <AppointmentCard
                  data={app}
                  index={index}
                  deleteAppointment={deleteAppointment}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
