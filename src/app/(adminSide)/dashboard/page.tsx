'use client';

import DashboardPage from '@/components/Dashboard/DashboardPage';
import AuthRequired from '@/components/Routes/AuthRequired';
import { IAppointmentProps } from '@/types/appointment.interface';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [appointments, setAppointments] = useState<IAppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const maxDate = new Date();
  const minDate = new Date();

  maxDate.setMonth(minDate.getMonth() + 1);

  useEffect(() => {
    getAllAppointments();
  }, []);

  async function getAllAppointments() {
    try {
      const response = await axios.get(
        `/api/appointment?MaxDate=${maxDate}&MinDate=${minDate}`
      );
      setAppointments(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function deleteAppointment(id: string) {
    try {
      const response = await axios.delete(`/api/appointment/${id}`);

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

export default AuthRequired(Profile);
