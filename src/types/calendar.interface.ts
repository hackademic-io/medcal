import { IAppointmentProps } from "./appointment.interface";

export interface ICalendarComponentProps {
  data: IAppointmentProps[];
  disabledDates: string[];
  date: Date;
  setDate: (date: Date) => void;
  maxDate: Date;
  minDate: Date;
}
