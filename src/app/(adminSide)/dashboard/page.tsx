"use client";

import DashboardPage from "@/components/Dashboard/DashboardPage";
import AuthRequired from "@/components/Routes/AuthRequired";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Profile = () => {
  const maxDate = new Date();
  const minDate = new Date();
  maxDate.setMonth(minDate.getMonth() + 1);

  async function getAllAppointments() {
    const { data } = await axios.get(
      `/api/appointment?MaxDate=${maxDate}&MinDate=${minDate}`
    );

    return data;
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["appointments"],
    queryFn: getAllAppointments,
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>There was an error with getting appointments</div>;

  return (
    <>
      <DashboardPage data={data} />
    </>
  );
};

export default AuthRequired(Profile);
