'use client';

import { IAppointmentProps } from '@/types/appointment.interface';
import { IDashboardPageProps } from '@/types/dashboard.interface';
import Link from 'next/link';
import React, { useState } from 'react';
import AppointmentCard from './AppointmentCard';
import MainModal from '../UI/Modals/MainModal';
import { useDisableBodyScroll } from '@/hooks/useDisableBodyScroll';

const DashboardPage: React.FC<IDashboardPageProps> = ({
  appointments,
  loading,
  deleteAppointment,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [appointmentId, setAppointmentId] = useState('');

  useDisableBodyScroll(showMenu);

  const deleteButton = (id: string) => {
    setAppointmentId(id);
    setShowMenu(true);
  };

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
            <div className="mb-4 ">
              <div className="grid grid-cols-[1fr_1fr_1.5fr_1fr_1fr_1fr] mb-2 text-xl font-semibold">
                <p>Fisrt name</p>
                <p>Last Name</p>
                <p>Email</p>
                <p>Date</p>
                <p>Time</p>
              </div>
              {appointments.map((app: IAppointmentProps) => (
                <AppointmentCard
                  key={app.id}
                  data={app}
                  deleteAppointment={deleteButton}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {showMenu ? (
        <MainModal
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          appointmentId={appointmentId}
          deleteAppointment={deleteAppointment}
        />
      ) : null}
    </div>
  );
};

export default DashboardPage;
