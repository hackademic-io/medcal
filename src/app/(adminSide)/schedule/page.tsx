"use client";

import React, { useState } from "react";
import CalendarComponent from "@/components/Calendar/CalendarComponent";
import axios from "axios";
import checkDisabledDates from "@/utils/checkDisabledDates";
import AuthRequired from "@/components/Routes/AuthRequired";
import { useQuery } from "@tanstack/react-query";

const Schedule = () => {
  const minDate = new Date();
  const maxDate = new Date();

  maxDate.setMonth(minDate.getMonth() + 1);

  const [date, setDate] = useState<Date>(minDate);

  async function getAllAppointments() {
    const { data } = await axios.get(
      `/api/appointment?MaxDate=${maxDate}&MinDate=${minDate}`,
    );

    return data;
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["appointments"],
    queryFn: getAllAppointments,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>There was an error with getting appointments</div>;

  const disabledDates = checkDisabledDates(data);

  return (
    <div className="h-full ">
      <CalendarComponent
        data={data}
        disabledDates={disabledDates}
        date={date}
        setDate={setDate}
        maxDate={maxDate}
        minDate={minDate}
      />
    </div>
  );
};

export default AuthRequired(Schedule);
