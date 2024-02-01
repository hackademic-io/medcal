import { IPatientData } from '@/types/user.interface';
import Link from 'next/link';
import React, { useState } from 'react';
import MainModal from '../UI/Modals/MainModal';
import { useDisableBodyScroll } from '@/hooks/useDisableBodyScroll';

interface IPatientCard {
  data: IPatientData;
  manage: boolean;
  key: number;
  showEmail: boolean;
}

const PatientCard = ({ data, manage, key, showEmail }: IPatientCard) => {
  const [openModal, setOpenModal] = useState(false);

  useDisableBodyScroll(openModal);

  return (
    <div
      className="flex justify-between items-center border-b-2 py-4"
      key={key}
    >
      <div className="grid-cols-5 grid gap-4 text-lg text-center items-center">
        <p>
          {data.name} {data.last_name}
        </p>
        <p>{data.date.toDateString()}</p>
        <p>{data.time}</p>
        <p>{data.doctor}</p>
        {showEmail ? data.email : null}
      </div>
      {manage ? (
        <>
          {' '}
          <div className="flex gap-3">
            <Link href={'/re-schedule'} className="outline_btn">
              Change
            </Link>
            <button onClick={() => setOpenModal(true)} className="cancel_btn">
              Cancel
            </button>
          </div>
          {openModal ? (
            <MainModal showMenu={openModal} setShowMenu={setOpenModal} />
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default PatientCard;