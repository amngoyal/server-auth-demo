'use client';

import { useAuth } from '@/contexts/UserContext';
import axiosClient from '@/lib/axiosInstance';
import { ReactNode, useEffect } from 'react';

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { setUser, setIsAuthLoading } = useAuth();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // use your backend API to get user details from cookie
        // const { data, error } = await authService.getUser();

        const res = await axiosClient.get('/api/auth/me');

        console.log('res', res);

        setUser(res?.data);
        setIsAuthLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    initializeAuth();
  }, [setUser, setIsAuthLoading]);

  return <>{children}</>;
}
