import { IAppointmentProps } from './appointment.interface';

export interface IDashboardPageProps {
  data: IAppointmentProps[];
  loading: boolean;
}

export interface IAppointmentCardProps {
  data: IAppointmentProps;
  deleteAppointment: (id: string) => void;
}
