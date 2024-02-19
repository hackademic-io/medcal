'use client';

import DashboardPage from '@/components/Dashboard/DashboardPage';
import { IAppointmentProps } from '@/types/appointment.interface';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [appointments, setAppointments] = useState<IAppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllAppointments();
  }, []);

  async function getAllAppointments() {
    try {
      const response = await axios.get('/api/appointment');
      setAppointments(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function deleteAppointment(id: string) {
    try {
      const response = await axios.delete('/api/appointment', {
        data: { id },
      });

      if (response && response.data) {
        const deletedAppointmentId = response.data.id;

        const newAppointmentList = appointments.filter(
          (appointment) => appointment.id !== deletedAppointmentId
        );

        setAppointments(newAppointmentList);
      }
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  }
  return (
    <>
      <DashboardPage
        appointments={appointments}
        loading={loading}
        deleteAppointment={deleteAppointment}
      />
    </>
  );
};

export default Profile;
