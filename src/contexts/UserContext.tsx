'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface User {
  name: string;
}

interface UserContextType {
  user: User | null;
  isAuthLoading: boolean;
  setUser: (user: User | null) => void;
  setIsAuthLoading: (value: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);

  return (
    <UserContext.Provider
      value={{ user, setUser, isAuthLoading, setIsAuthLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
