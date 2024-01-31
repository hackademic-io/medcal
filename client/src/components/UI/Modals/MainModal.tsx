import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface MainModalProps {
  showMenu: boolean;
  setShowMenu: (date: boolean) => void;
}

const MainModal: React.FC<MainModalProps> = ({ showMenu, setShowMenu }) => {
  const router = useRouter();

  const submitHandler = () => {
    return router.push('/cancel');
  };

  return (
    <>
      {' '}
      <div className="">
        <div
          className={`absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 flex-col items-center bg-white p-12 transition-all duration-300 z-20 ${
            showMenu ? ' translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={(e) => setShowMenu(false)}
            className="text-xl font-semibold transition-all hover:opacity-70"
          >
            Go Back
          </button>
          <div className="text-4xl font-bold my-6">
            Are you sure that you want to cancel this appointment?
            <br /> You can&apos;t return this time slot,
            <br /> and it&apos;s going to be offered to another client.
          </div>
          <div className="flex gap-6">
            <Link href={'/cancel'} className="blue_btn">
              Yes, i want to cancel
            </Link>
            <button onClick={(e) => setShowMenu(false)} className="cancel_btn">
              I changed my mind.
            </button>
          </div>
        </div>
      </div>
      <div
        className={`bg-black z-10 absolute w-screen h-screen min-h-[200%] top-0 left-0 duration-300 transition-all ${
          showMenu
            ? 'opacity-30 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      ></div>
    </>
  );
};

export default MainModal;
