import { FieldValues, SubmitHandler } from 'react-hook-form';
import { IUser } from './user.interface';

export interface AuthForm {
  onSubmit: SubmitHandler<FieldValues>;
  error: string;
  type: string;
}

export interface IAuthContextProps {
  user: IUser;
  loading: boolean;
  setUser: (user: IUser) => void;
  setLoading: (loading: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  registration: (
    email: string,
    password: string,
    name: string,
    last_name: string,
    role: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}
