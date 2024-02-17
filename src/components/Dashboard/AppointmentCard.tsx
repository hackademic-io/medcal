import { IAppointmentCardProps } from '@/types/dashboard.interface';
import React from 'react';

const AppointmentCard: React.FC<IAppointmentCardProps> = ({
  data,
  deleteAppointment,
}) => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1.5fr_1fr_1fr_1fr] text-lg mb-4 items-center">
      <p>{data.first_name}</p>
      <p>{data.last_name}</p>
      <p>{data.email}</p>
      <p>{new Date(data.date).toLocaleDateString()}</p>
      <p>{data.time}</p>
      <button onClick={() => deleteAppointment(data.id)} className="cancel_btn">
        Cancel
      </button>
    </div>
  );
};

export default AppointmentCard;
