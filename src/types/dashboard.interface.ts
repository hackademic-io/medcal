import { IAppointmentProps } from './appointment.interface';

export interface IDashboardPageProps {
  appointments: IAppointmentProps[];
  loading: boolean;
  deleteAppointment: (id: string) => void;
  setAppointments: (appointments: IAppointmentProps[]) => void;
}

export interface IAppointmentCardProps {
  data: IAppointmentProps;
  deleteAppointment: (id: string) => void;
}
