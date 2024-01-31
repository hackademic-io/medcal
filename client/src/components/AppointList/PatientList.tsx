import React from 'react';
import PatientCard from './PatientCard';
import { IPatientData } from '@/types/user.interface';

interface PatientListProps {
  data: IPatientData[];
}

const PatientList: React.FC<PatientListProps> = ({ data }) => {
  return (
    <div className="mt-4 flex flex-col w-full">
      <div className="w-full mb-16">
        <h2 className="text-2xl font-semibold">Upcoming appointments</h2>
        <div className="flex flex-col gap-4 mt-6">
          {data.map((appointmentData, index) => (
            <PatientCard
              data={appointmentData}
              manage={true}
              key={index}
              showEmail={false}
            />
          ))}
        </div>
      </div>
      <div className="w-full mb-16">
        <h2 className="text-2xl font-semibold">Previous appointments</h2>
        <div className="flex flex-col gap-4 mt-6">
          {data.map((appointmentData, index) => (
            <PatientCard
              data={appointmentData}
              manage={false}
              key={index}
              showEmail={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientList;
