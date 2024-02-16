import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import CustomInput from '../Input/Input';
import { FieldValues, useForm } from 'react-hook-form';

const currentDate: Date = new Date();

interface SideModalProps {
  date: Date;
  showMenu: boolean;
  setShowMenu: (date: boolean) => void;
  onSubmit: (data: FieldValues) => void;
  time: string | null;
  setTime: (date: string | null) => void;
}

const SideModal = ({
  showMenu,
  setShowMenu,
  date,
  onSubmit,
  time,
  setTime,
}: SideModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const timeSlots = [
    '08:00 AM',
    '9:00 AM',
    '10:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
  ];

  const router = useRouter();

  function display(e: any) {
    const buttonText = e?.target?.innerText ?? '';

    setTime(buttonText);
  }

  return (
    <>
      {' '}
      <div
        className={`absolute top-0 right-0 bg-white min-h-screen w-1/3 p-8 transition-all duration-300 z-20 ${
          showMenu ? ' translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={(e) => setShowMenu(false)}
          className="text-xl font-semibold transition-all hover:opacity-70"
        >
          Go Back
        </button>
        <h2 className="text-4xl font-bold mt-4">
          {' '}
          Available time on: <br /> {date.toDateString()}
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-4 mt-4">
          {timeSlots.map((times, index) => {
            return (
              <button
                key={index}
                className=" border-blue-600  border-2 flex justify-center p-3 focus:bg-blue-600 focus:text-white rounded-xl"
                onClick={(e) => display(e)}
              >
                {times}{' '}
              </button>
            );
          })}
        </div>

        {time ? (
          <div>
            <p className="text-xl mb-4">
              Selected time: <span className="font-bold">{time}</span>
            </p>{' '}
            <form onSubmit={handleSubmit(onSubmit)}>
              {' '}
              <CustomInput
                label="Email address"
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                register={register}
                errors={errors.email}
                required={true}
                cytest="auth-email"
              />
              <div className="flex gap-6 mt-4">
                <CustomInput
                  label="First Name"
                  placeholder="First Name"
                  name="first_name"
                  type="text"
                  register={register}
                  errors={errors?.first_name}
                  required={true}
                  cytest="first-name-input"
                />
                <CustomInput
                  label="Last Name"
                  placeholder="Last Name"
                  name="last_name"
                  type="text"
                  register={register}
                  errors={errors?.last_name}
                  required={true}
                  cytest="last-name-input"
                />
              </div>
              <div className="flex mt-4 items-center">
                <input
                  type="checkbox"
                  id="open_to_earlier"
                  className=" mr-4 w-7 h-7 cursor-pointer"
                  {...register('open_to_earlier')}
                />
                <label className="text-lg">
                  Does the patient wish to inquire about the availability of the
                  earliest date?
                </label>
              </div>
              <button
                className="submit_btn mt-4"
                type="submit"
                disabled={isSubmitting}
              >
                Confirm
              </button>
            </form>
          </div>
        ) : null}
      </div>
      <div
        className={`bg-black z-10 absolute w-screen h-screen top-0 left-0 duration-300 transition-all ${
          showMenu
            ? 'opacity-30 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      ></div>
    </>
  );
};

export default SideModal;
