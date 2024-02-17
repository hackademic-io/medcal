import { IAppointmentProps } from './appointment.interface';

export interface IDashboardPageProps {
  appointments: IAppointmentProps[];
  loading: boolean;
  deleteAppointment: (id: string) => void;
}

export interface IAppointmentCardProps {
  data: IAppointmentProps;
  index: number;
  deleteAppointment: (id: string) => void;
}
