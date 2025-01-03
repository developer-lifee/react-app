import React, { createContext, useState, useEffect, ReactNode } from 'react';
import api from '../util/axiosConfig'; // Asegúrate de importar la instancia de Axios
import { jwtDecode, JwtPayload as DefaultJwtPayload } from 'jwt-decode';

interface JwtPayload extends DefaultJwtPayload {
  email: string;
  role: string;
}

interface User {
  email: string;
  role: string;
  // Agrega cualquier otra propiedad necesaria
}

interface AuthContextType {
  user: User | null;
  handleLogin: (email: string, password: string) => Promise<User>;
  handleGoogleLogin: () => void;
  handleAppleLogin: () => void;
  handleCreateUser: (formData: any) => Promise<User>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  handleLogin: async () => { return { email: '', role: '' }; },
  handleGoogleLogin: () => {},
  handleAppleLogin: () => {},
  handleCreateUser: async () => { return { email: '', role: '' }; },
  logout: () => {},
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

  const handleLogin = async (email: string, password: string): Promise<User> => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const token = response.data.access_token;

      localStorage.setItem('token', token); // Guarda el token
      const decodedToken: JwtPayload = jwtDecode(token); // Decodifica el token

      // Mapear JwtPayload a User
      const user: User = {
        email: decodedToken.email as string, // Asegúrate de que el campo existe
        role: decodedToken.role as string,   // Asegúrate de que el campo existe
        // Agrega otros campos necesarios
      };

      setUser(user);
      return user;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Example flow: request a redirect URL from backend or handle callback
      const response = await api.get('/auth/google');
      window.location.href = response.data.url; 
    } catch (error) {
      console.error('Google login failed', error);
    }
  };

  const handleAppleLogin = async () => {
    try {
      const response = await api.get('/auth/apple');
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Apple login failed', error);
    }
  };

  const handleCreateUser = async (formData: any): Promise<User> => {
    try {
      const response = await api.post('/users', formData);
      const token = response.data.access_token;
      localStorage.setItem('token', token);
      sessionStorage.setItem('token', token); // If desired
      const decodedToken: JwtPayload = jwtDecode(token);
      const newUser: User = {
        email: decodedToken.email as string,
        role: decodedToken.role as string,
        // ...any extra fields...
      };
      setUser(newUser);
      return newUser;
    } catch (error) {
      console.error('User creation failed', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleGoogleLogin, handleAppleLogin, handleCreateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
