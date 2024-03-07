import React from "react";
import CustomInput from "../Input/Input";
import { FieldValues, useForm } from "react-hook-form";
import { IAppointmentProps } from "@/types/appointment.interface";
import { SideModalProps } from "@/types/modal.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

const SideModal: React.FC<SideModalProps> = ({
  showMenu,
  setShowMenu,
  date,
  time,
  setTime,
  appointments,
}) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: createAppointment, isPending: createPending } = useMutation({
    mutationFn: async (data: FieldValues) =>
      await axios.post("/api/appointment", {
        email: data.email,
        id: v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        open_to_earlier: data.open_to_earlier,
        date,
        time,
        isPending: false,
        status: "BOOKED",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      router.push("/success");
    },
    onError: (err) => {
      console.error("Error creating appointment :", err);
    },
  });

  const isAvailable = (timeSlot: string) => {
    return !appointments.some(
      (appointment: IAppointmentProps) => appointment.time === timeSlot,
    );
  };

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];

  function display(e: any) {
    const buttonText = e?.target?.innerText ?? "";

    setTime(buttonText);
    clearErrors();
  }

  function goBack() {
    setShowMenu(false);
    setTime(null);
    clearErrors();
  }

  return (
    <>
      {" "}
      <div
        className={`absolute top-0 right-0 bg-white min-h-screen w-1/3 p-8 transition-all duration-300 z-20 ${
          showMenu ? " translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={goBack}
          className="text-xl font-semibold transition-all hover:opacity-70"
        >
          Go Back
        </button>
        <h2 className="text-4xl font-bold mt-4">
          {" "}
          Available time on: <br /> {date.toDateString()}
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-4 mt-4">
          {timeSlots.map((times, index) => {
            const isDisabled = !isAvailable(times);
            return (
              <button
                key={index}
                className={`border-blue-600 border-2 flex justify-center p-3 rounded-xl 
                  disabled:bg-gray-300 disabled:border-gray-600 ${time === times ? "bg-blue-600 text-white" : ""}`}
                onClick={(e) => display(e)}
                disabled={isDisabled}
              >
                {times}{" "}
              </button>
            );
          })}
        </div>

        {time ? (
          <div>
            <p className="text-xl mb-4">
              Selected time: <span className="font-bold">{time}</span>
            </p>{" "}
            <form
              onSubmit={handleSubmit((formData) => createAppointment(formData))}
            >
              {" "}
              <CustomInput
                label="Email address"
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                register={register}
                errors={errors.email}
                required={true}
                cytest="auth-email"
              />
              <div className="flex gap-6 mt-2">
                <CustomInput
                  label="First Name"
                  placeholder="First Name"
                  name="first_name"
                  type="text"
                  register={register}
                  errors={errors?.first_name}
                  required={true}
                  cytest="first-name-input"
                />
                <CustomInput
                  label="Last Name"
                  placeholder="Last Name"
                  name="last_name"
                  type="text"
                  register={register}
                  errors={errors?.last_name}
                  required={true}
                  cytest="last-name-input"
                />
              </div>
              <div className="flex mt-2 items-center">
                <input
                  type="checkbox"
                  id="open_to_earlier"
                  className=" mr-4 w-7 h-7 cursor-pointer"
                  {...register("open_to_earlier")}
                />
                <label className="text-lg">
                  Does the patient wish to inquire about the availability of the
                  earliest date?
                </label>
              </div>
              <button
                className="submit_btn mt-4"
                type="submit"
                disabled={createPending}
              >
                {createPending ? "Loading..." : "Confirm"}
              </button>
            </form>
          </div>
        ) : null}
      </div>
      <div
        className={`bg-black z-10 absolute w-screen h-screen top-0 left-0 duration-300 transition-all ${
          showMenu
            ? "opacity-30 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </>
  );
};

export default SideModal;
