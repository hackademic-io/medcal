'use client';

import React, { useEffect, useState } from 'react';
import CalendarComponent from '@/components/Calendar/CalendarComponent';
import axios from 'axios';
import { IAppointmentProps } from '@/types/appointment.interface';
import checkDisabledDates from '@/utils/checkDisabledDates';

const Schedule = () => {
  const currentDate: Date = new Date();

  const [date, setDate] = useState<Date>(currentDate);
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

  const disabledDates = checkDisabledDates(appointments);

  return (
    <div className="h-full ">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CalendarComponent
          appointments={appointments}
          disabledDates={disabledDates}
          date={date}
          setDate={setDate}
          maxDate={maxDate}
          minDate={minDate}
        />
      )}
    </div>
  );
};

export default Schedule;
