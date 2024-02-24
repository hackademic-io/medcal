'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SideModal from '../UI/Modals/SideModal';
import { FieldValues } from 'react-hook-form';
import axios from 'axios';
import { v4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { IAppointmentProps } from '@/types/appointment.interface';
import { ICalendarComponentProps } from '@/types/calendar.interface';

const CalendarComponent: React.FC<ICalendarComponentProps> = ({
  appointments,
  disabledDates,
  date,
  setDate,
  maxDate,
  minDate,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [time, setTime] = useState<string | null>(null);
  const router = useRouter();

  const tileDisabled = ({ date }: { date: Date }) => {
    return (
      date < minDate ||
      date > maxDate ||
      disabledDates.some((appointment: string) => {
        const appointmentDate = new Date(appointment);
        return appointmentDate.getDate() === date.getDate();
      })
    );
  };

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
  };

  const submitHandler = async (data: FieldValues) => {
    try {
      const response = await axios.post('/api/appointment', {
        email: data.email,
        id: v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        open_to_earlier: data.open_to_earlier,
        date,
        time,
        isPending: false,
        status: 'BOOKED',
      });
      if (response.status >= 200 && response.status < 300) {
        router.push('/success');
      } else {
        console.log('Something went wrong, please retry');
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  const appointmentsForSpecificDate = appointments.filter(
    (app: IAppointmentProps) => new Date(app.date).getDate() === date.getDate()
  );

  return (
    <div className="">
      <div className="calendar-container h-full w-full overflow-x-hidden">
        <SideModal
          date={date}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          onSubmit={submitHandler}
          time={time}
          setTime={setTime}
          appointments={appointmentsForSpecificDate}
        />
        <Calendar
          onChange={handleDateChange}
          value={date}
          maxDate={maxDate}
          minDate={minDate}
          tileDisabled={tileDisabled}
          onClickDay={(e) => setShowMenu(!showMenu)}
          locale="en-GB"
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
