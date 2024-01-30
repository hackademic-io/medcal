import React from 'react';

const PatientList = () => {
  return (
    <div className="mt-4 flex justify-between w-full">
      <div className="w-full">
        <h2 className="text-2xl">Previous appointments</h2>
        <div>List of appointments</div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl">
          Upcoming appointments + ability to manage them
        </h2>
        <div>List of appointments</div>
      </div>
    </div>
  );
};

export default PatientList;
