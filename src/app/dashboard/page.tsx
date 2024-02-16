'use client';

import DashboardPage from '@/components/Dashboard/DashboardPage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllAppointments();
  }, []);

  async function getAllAppointments() {
    try {
      const response = await axios.get('/api/appointment');
      setAppointments(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <>
      <DashboardPage appointments={appointments} loading={loading} />
    </>
  );
};

export default Profile;
