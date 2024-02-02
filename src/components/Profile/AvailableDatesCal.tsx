import Image from 'next/image';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useForm } from 'react-hook-form';
import closeIcon from '../../../assets/icons/close.svg';
import Dropdown from '../UI/Dropdown/Dropdown';
import 'react-calendar/dist/Calendar.css';

interface IAvalDatesCalProps {
  setShowCalendar: (e: boolean) => void;
}

const AvailableDatesCal: React.FC<IAvalDatesCalProps> = ({
  setShowCalendar,
}) => {
  const testTimes = [
    { value: '08:00 AM', label: '08:00 AM' },
    { value: '09:15 AM', label: '09:15 AM' },
    { value: '10:30 AM', label: '10:30 AM' },
    { value: '11:45 AM', label: '11:45 AM' },
    { value: '01:00 PM', label: '01:00 PM' },
    { value: '02:15 PM', label: '02:15 PM' },
    { value: '03:30 PM', label: '03:30 PM' },
    { value: '04:45 PM', label: '04:45 PM' },
  ];

  const {
    register,
    formState: { errors },
  } = useForm();
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>('08:00AM');
  const newDate = new Date();

  const currentDate: Date = new Date();

  const [date, setDate] = useState<Date>(currentDate);
  const minDate = new Date();

  const maxDate = new Date();
  maxDate.setMonth(minDate.getMonth() + 2);

  const tileDisabled = ({ date }: { date: Date }) => {
    return date < minDate || date > maxDate;
  };

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
    setTimeSlots([]);
  };

  const handleAddTimeSlot = () => {
    {
      selectedTime !== '' ? setTimeSlots([...timeSlots, selectedTime]) : null;
    }
  };

  const removeTime = (index: number) => {
    const newTimeSlots = [
      ...timeSlots.slice(0, index),
      ...timeSlots.slice(index + 1),
    ];
    setTimeSlots([...newTimeSlots]);
  };

  return (
    <div className="border-2 p-8 mt-8">
      <div className="mt-8">
        <div className="calendar-container h-full w-full">
          <Calendar
            onChange={handleDateChange}
            value={date}
            maxDate={maxDate}
            minDate={minDate}
            tileDisabled={tileDisabled}
            locale="en-GB"
          />
        </div>
        <p className="my-6 text-xl">
          <span className="bold ">Selected Date:</span>{' '}
          {date ? date.toDateString() : 'none'}
        </p>
        <div className="text-xl grid grid-cols-4 gap-4">
          {timeSlots.map((time, index) => (
            <div
              key={index}
              className="border-2 rounded-lg p-3 flex items-center justify-between"
            >
              {time}
              <button
                type="button"
                onClick={() => removeTime(index)}
                className="h-full px-4"
              >
                <Image
                  src={closeIcon}
                  width={28}
                  height={28}
                  className="rounded-full"
                  alt="close-icon"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="text-xl mt-4 flex justify-between gap-20">
          <Dropdown
            options={testTimes}
            register={register}
            errors={errors.role}
            required={true}
            name="time"
            id="time"
            cytest="auth-role"
            onChange={setSelectedTime}
          />
          <button
            onClick={handleAddTimeSlot}
            className="outline_btn w-full"
            disabled={timeSlots.length > 7}
          >
            {timeSlots.length > 7 ? 'You reached the limit' : 'Add time slot'}
          </button>
        </div>
        <div className="w-full flex items-center justify-center mt-8 gap-10">
          <button className="blue_btn">Submitt time slots</button>
          <button onClick={() => setShowCalendar(false)} className="cancel_btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableDatesCal;
