import { useRouter } from 'next/navigation';
import React, { MouseEvent, useState } from 'react';

const currentDate: Date = new Date();

interface SideModalProps {
  date: Date;
  showMenu: boolean;
  setShowMenu: (date: boolean) => void;
}

const SideModal = ({ showMenu, setShowMenu, date }: SideModalProps) => {
  const time = ['03:00', '10:00', '15:00', '19:00', '20:30'];
  const [event, setEvent] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const router = useRouter();

  function display(e: any) {
    const buttonText = e?.target?.innerText ?? '';

    setEvent(buttonText);
    setConfirm(false);
  }

  const submitHandler = () => {
    return router.push('/success');
  };

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
        <h2 className="text-4xl font-bold mt-20">
          {' '}
          Available time on: <br /> {date.toDateString()}
        </h2>
        <h3 className="text-3xl font-semibold my-3">Doctor 1</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {time.map((times, index) => {
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

        {event ? (
          <>
            <p className="text-xl">
              Selected time: <span className="font-bold">{event}</span>
            </p>{' '}
            <button
              onClick={() => setConfirm(true)}
              className="outline_btn mt-2"
            >
              Yes, select this time
            </button>
          </>
        ) : null}

        {confirm ? (
          <div className="text-xl mt-3">
            <p className="mb-2">Please confirm the info: </p>
            <p>
              Date: <span className="font-bold">{date.toDateString()}</span>
            </p>
            <p className="mb-2">
              Time: <span className="font-bold">{event}</span>
            </p>
            <button className="submit_btn" onClick={submitHandler}>
              Confirm
            </button>
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
