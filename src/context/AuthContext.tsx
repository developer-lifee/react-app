import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { login as loginService, googleAuth, appleAuth } from '../services/apiService';

interface User {
  email: string;
  role: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void; 
  handleLogin: (email: string, password: string) => Promise<void>;
  handleGoogleLogin: () => void;
  handleAppleLogin: () => void;
  handleCreateUser: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
  handleLogin: async () => {},
  handleGoogleLogin: () => {},
  handleAppleLogin: () => {},
  handleCreateUser: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Cargar el usuario y token desde localStorage al inicio
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const user = await loginService(email, password);
      // Guardar token y usuario en localStorage
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
      // Handle login success (e.g., save token, redirect, etc.)
    } catch (error) {
      console.error('Login failed', error);
      handleError(error);
    }
  };

  const handleGoogleLogin = () => {
    googleAuth();
  };

  const handleAppleLogin = () => {
    appleAuth();
  };

  const handleCreateUser = () => {
    // Implement user creation logic here
  };

  const handleError = (error: unknown) => {
    const err = error as { response?: { data: any }; message: string };
    console.error('Error details:', err.response ? err.response.data : err.message);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, handleLogin, handleGoogleLogin, handleAppleLogin, handleCreateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
