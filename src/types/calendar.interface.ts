import { IAppointmentProps } from './appointment.interface';

export interface ICalendarComponentProps {
  appointments: IAppointmentProps[];
  disabledDates: string[];
  date: Date;
  setDate: (date: Date) => void;
  maxDate: Date;
  minDate: Date;
}
