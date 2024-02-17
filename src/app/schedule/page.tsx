'use client';

import React, { useEffect, useState } from 'react';
import CalendarComponent from '@/components/Calendar/CalendarComponent';
import axios from 'axios';
import { IAppointmentProps } from '@/types/appointment.interface';

const Schedule = () => {
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

  const checkDisabledDates = () => {
    const disabledDates = new Set();

    appointments.forEach(({ date }) => {
      if (!disabledDates.has(date)) {
        const appointmentsForDate = appointments.filter(
          (appointment) => appointment.date === date
        );

        const bookedTimesCount = appointmentsForDate.reduce(
          (count, appointment) => {
            if (appointment.time) {
              return count + 1;
            }
            return count;
          },
          0
        );

        if (bookedTimesCount === 6) {
          disabledDates.add(date);
        }
      }
    });

    const uniqueDisabledDates = Array.from(disabledDates);

    return uniqueDisabledDates as string[];
  };

  const disabledDates = checkDisabledDates();
  return (
    <div className="h-full ">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CalendarComponent
          appointments={appointments}
          disabledDates={disabledDates}
        />
      )}
    </div>
  );
};

export default Schedule;
