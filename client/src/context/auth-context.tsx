'use client';

import { API_URL } from '@/http';
import AuthService from '@/services/AuthService';
import { IAuthContextProps } from '@/types/auth.interface';
import { AuthResponse } from '@/types/response/AuthResponse';
import { IUser } from '@/types/user.interface';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

export const AuthContext = React.createContext<IAuthContextProps>({
  user: {} as IUser,
  loading: true,
  setUser: () => {},
  setLoading: () => {},
  login: async () => {},
  registration: async () => {},
  logout: async () => {},
  checkAuth: async () => {},
});

export const AuthContextProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState({} as IUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initializeAuth() {
      if (localStorage.getItem('token')) {
        await checkAuth();
      }
      setIsLoading(false);
    }

    initializeAuth();
  }, []);

  async function login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      setCurrentUser(response.data.user);
      return response;
    } catch (e: any) {
      console.log(e.response?.data?.message);
      return e.response;
    }
  }

  async function registration(
    email: string,
    password: string,
    name: string,
    last_name: string,
    role: string
  ) {
    try {
      const response = await AuthService.registration(
        email,
        password,
        name,
        last_name,
        role
      );
      localStorage.setItem('token', response.data.accessToken);
      setCurrentUser(response.data.user);
      return response;
    } catch (e: any) {
      console.log(e.response?.data?.message);
      return e.response;
    }
  }

  async function logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      setCurrentUser({} as IUser);
    } catch (e: any) {
      console.log(e.response?.data?.message);
      return e.response;
    }
  }

  async function checkAuth() {
    setIsLoading(true);
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token', response.data.accessToken);
      setCurrentUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
      return e.response;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        loading: isLoading,
        setUser: setCurrentUser,
        setLoading: setIsLoading,
        login: login,
        registration: registration,
        logout: logout,
        checkAuth: checkAuth,
      }}
    >
      {isLoading ? null : props.children}{' '}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
