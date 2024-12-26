import React, { createContext, useState, useEffect, ReactNode } from 'react';
import api from '../util/axiosConfig'; // Asegúrate de importar la instancia de Axios

interface User {
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  handleLogin: (email: string, password: string) => Promise<User>;
  handleGoogleLogin: () => void;
  handleAppleLogin: () => void;
  handleCreateUser: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  handleLogin: async () => { return { email: '', role: '' }; },
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

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await api.post('/login', { email, password });
      const { token, user } = response.data;
      // Guardar token y usuario en localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      return user;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const handleGoogleLogin = () => {
    // Implementa la lógica de inicio de sesión con Google
  };

  const handleAppleLogin = () => {
    // Implementa la lógica de inicio de sesión con Apple
  };

  const handleCreateUser = () => {
    // Implementa la lógica de creación de usuario
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleGoogleLogin, handleAppleLogin, handleCreateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
