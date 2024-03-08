"use client";

import { IAppointmentProps } from "@/types/appointment.interface";
import { IDashboardPageProps } from "@/types/dashboard.interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import MainModal from "../UI/Modals/MainModal";
import { useDisableBodyScroll } from "@/hooks/useDisableBodyScroll";
import Dropdown from "../UI/Dropdown/Dropdown";

const DashboardPage: React.FC<IDashboardPageProps> = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");
  const [appointments, setAppointments] = useState(data);

  useEffect(() => {
    setAppointments(data.filter((app) => app.status !== "CANCELED"));
  }, [data]);

  useDisableBodyScroll(showMenu);

  const deleteButton = (id: string) => {
    setAppointmentId(id);
    setShowMenu(true);
  };

  const handleDropdownChange = (selectedOption: any) => {
    if (selectedOption === "Sort By Date (Closest First)") {
      FarToCloseFilter();
    } else if (selectedOption === "Sort By Date (Farthest First)") {
      CloseToFarFilter();
    }
  };

  const FarToCloseFilter = () => {
    setAppointments(
      appointments
        .slice()
        .sort(
          (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate(),
        ),
    );
  };

  const CloseToFarFilter = () => {
    setAppointments(
      appointments
        .slice()
        .sort(
          (a, b) => new Date(b.date).getDate() - new Date(a.date).getDate(),
        ),
    );
  };

  const filterDatesOptions = [
    { value: "Filter", label: "Filter" },
    {
      value: "Farthest First",
      label: "Sort By Date (Farthest First)",
    },
    {
      value: "Closest First",
      label: "Sort By Date (Closest First)",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Link href="/schedule" className="blue_btn mt-6 w-1/3 h-16">
          Schedule an appointment
        </Link>
      </div>

      <div>
        <h1 className="text-4xl font-bold mt-4">Appointments</h1>
        <div className="my-6 w-1/4">
          <Dropdown
            name="filter-dates"
            options={filterDatesOptions}
            onChange={handleDropdownChange}
          />
        </div>

        <div className="mb-4">
          <div className="mb-4 ">
            <div className="grid grid-cols-[1fr_1fr_1.5fr_1fr_1fr_1fr] mb-2 text-xl font-semibold">
              <p>Fisrt name</p>
              <p>Last Name</p>
              <p>Email</p>
              <p>Date</p>
              <p>Time</p>
            </div>
            {appointments.map((app: IAppointmentProps) => (
              <AppointmentCard
                key={app.id}
                data={app}
                deleteAppointment={deleteButton}
              />
            ))}
          </div>
        </div>
      </div>
      {showMenu ? (
        <MainModal
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          appointmentId={appointmentId}
        />
      ) : null}
    </div>
  );
};

export default DashboardPage;
