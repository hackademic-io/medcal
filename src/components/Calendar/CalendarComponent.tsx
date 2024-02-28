'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SideModal from '../UI/Modals/SideModal';
import { IAppointmentProps } from '@/types/appointment.interface';
import { ICalendarComponentProps } from '@/types/calendar.interface';

const CalendarComponent: React.FC<ICalendarComponentProps> = ({
  data,
  disabledDates,
  date,
  setDate,
  maxDate,
  minDate,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [time, setTime] = useState<string | null>(null);

  const setDisabledDates = ({ date }: { date: Date }) => {
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

  const appointmentsForSpecificDate = data.filter(
    (app: IAppointmentProps) => new Date(app.date).getDate() === date.getDate()
  );

  return (
    <div className="">
      <div className="calendar-container h-full w-full overflow-x-hidden">
        <SideModal
          date={date}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          time={time}
          setTime={setTime}
          appointments={appointmentsForSpecificDate}
        />
        <Calendar
          onChange={handleDateChange}
          value={date}
          maxDate={maxDate}
          minDate={minDate}
          tileDisabled={setDisabledDates}
          onClickDay={(e) => setShowMenu(!showMenu)}
          locale="en-GB"
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
