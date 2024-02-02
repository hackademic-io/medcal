export interface IUser {
  email: string;
  name: string;
  last_name: string;
  role: string;
  id: string;
  isActivated: boolean;
}

export interface IPatientData {
  name: string;
  last_name: string;
  date: Date;
  doctor: string;
  time: string;
  email: string;
}
