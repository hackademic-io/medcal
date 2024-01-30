import $api from '@/http';
import { AuthResponse } from '@/types/response/AuthResponse';
import { AxiosResponse } from 'axios';

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, password });
  }

  static async registration(
    email: string,
    password: string,
    name: string,
    last_name: string,
    role: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', {
      email,
      password,
      name,
      last_name,
      role,
    });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
