import { FieldValues } from 'react-hook-form';
import { IAppointmentProps } from './appointment.interface';

export interface IMainModalProps {
  showMenu: boolean;
  setShowMenu: (date: boolean) => void;
  appointmentId: string;
}

export interface SideModalProps {
  date: Date;
  showMenu: boolean;
  setShowMenu: (date: boolean) => void;

  time: string | null;
  setTime: (date: string | null) => void;
  appointments: IAppointmentProps[];
}
