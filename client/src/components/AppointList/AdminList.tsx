import { IPatientData } from '@/types/user.interface';
import React from 'react';
import PatientCard from './PatientCard';

interface AdminListProps {
  data: IPatientData[];
}

const AdminList: React.FC<AdminListProps> = ({ data }) => {
  return (
    <div className="mt-4 flex justify-between w-full">
      {' '}
      <div className="flex flex-col mt-4 w-full">
        {data.map((appointmentData, index) => (
          <PatientCard
            data={appointmentData}
            manage={true}
            key={index}
            showEmail={true}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminList;
