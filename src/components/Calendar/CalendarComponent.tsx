'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SideModal from '../UI/Modals/SideModal';

const CalendarComponent = () => {
  const currentDate: Date = new Date();

  const [date, setDate] = useState<Date>(currentDate);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const minDate = new Date();

  const maxDate = new Date();
  maxDate.setMonth(minDate.getMonth() + 2);

  const tileDisabled = ({ date }: { date: Date }) => {
    return date < minDate || date > maxDate;
  };

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <div className="">
      <div className="calendar-container h-full w-full">
        <SideModal date={date} showMenu={showMenu} setShowMenu={setShowMenu} />
        <Calendar
          onChange={handleDateChange}
          value={date}
          maxDate={maxDate}
          minDate={minDate}
          tileDisabled={tileDisabled}
          onClickDay={(e) => setShowMenu(true)}
          locale="en-GB"
        />
      </div>
      <p className="text-center mt-6">
        <span className="bold ">Selected Date:</span>{' '}
        {date ? date.toDateString() : 'none'}
      </p>
    </div>
  );
};

export default CalendarComponent;
