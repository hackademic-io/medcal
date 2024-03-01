import { IAppointmentCardProps } from '@/types/dashboard.interface';
import Link from 'next/link';
import React from 'react';

const AppointmentCard: React.FC<IAppointmentCardProps> = ({
  data,
  deleteAppointment,
}) => {
  const hash = 'hash';
  const encryptionIV = 'encryptionIV';

  return (
    <div className="grid grid-cols-[1fr_1fr_1.5fr_1fr_1fr_1fr] text-lg mb-4 items-center">
      <p>{data.first_name}</p>
      <p>{data.last_name}</p>
      <p>{data.email}</p>
      {/* <p>{new Date(data.date).toLocaleDateString()}</p>
      <p>{data.time}</p> */}
      {/* TEST BUTTONS */}
      <Link
        href={`appointment/${data.id}/canceled?hash=${hash}&iv=${encryptionIV}`}
      >
        Test button cancel
      </Link>
      <Link
        href={`appointment/${data.id}/confirmed?hash=${hash}&iv=${encryptionIV}`}
      >
        Test button confirm
      </Link>
      <button onClick={() => deleteAppointment(data.id)} className="cancel_btn">
        Cancel
      </button>
    </div>
  );
};

export default AppointmentCard;
