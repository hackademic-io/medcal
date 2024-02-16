'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SideModal from '../UI/Modals/SideModal';
import { FieldValues } from 'react-hook-form';
import axios from 'axios';
import { v4 } from 'uuid';

const CalendarComponent = () => {
  const currentDate: Date = new Date();

  const [date, setDate] = useState<Date>(currentDate);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [time, setTime] = useState<string | null>(null);

  const minDate = new Date();

  const maxDate = new Date();
  maxDate.setMonth(minDate.getMonth() + 2);

  const tileDisabled = ({ date }: { date: Date }) => {
    return date < minDate || date > maxDate;
  };

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
  };

  const submitHandler = async (data: FieldValues) => {
    try {
      const response = await axios.post('/api/appointment', {
        email: data.email,
        appointment_id: v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        open_to_earlier: data.open_to_earlier,
        date,
        time,
        booked: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div className="">
      <div className="calendar-container h-full w-full">
        <SideModal
          date={date}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          onSubmit={submitHandler}
          time={time}
          setTime={setTime}
        />
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
