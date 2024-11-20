import React, { createContext, useState, useEffect } from 'react';
import { login as loginService, googleAuth } from '../services/apiService';

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
  handleCreateUser: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
  handleLogin: async () => {},
  handleGoogleLogin: () => {},
  handleCreateUser: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
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
      const response = await loginService(email, password);
      const { access_token } = response;

      // Decodificar el token para obtener los datos del usuario
      const decodedToken: any = parseJwt(access_token);

      const userData: User = {
        email: decodedToken.email,
        role: decodedToken.role,
        // Agrega otros campos si los hay
      };

      // Guardar token y usuario en localStorage
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(userData));

      setUser(userData);
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
      const data = await loginService(email, password);
      // Handle login success (e.g., save token, redirect, etc.)
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleGoogleLogin = () => {
    googleAuth();
  };

  const handleCreateUser = () => {
    // Implement user creation logic here
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, handleLogin, handleGoogleLogin, handleCreateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Función para decodificar el token JWT
function parseJwt(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}