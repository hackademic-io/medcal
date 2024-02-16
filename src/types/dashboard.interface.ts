import { IAppointmentProps } from './appointment.interface';

export interface IDashboardPageProps {
  appointments: IAppointmentProps[];
  loading: boolean;
}
