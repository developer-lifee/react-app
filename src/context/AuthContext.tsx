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
  handleCreateUser: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  handleLogin: async () => { return { email: '', role: '' }; },
  handleGoogleLogin: () => {},
  handleAppleLogin: () => {},
  handleCreateUser: () => {},
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

  const handleGoogleLogin = () => {
    // Implementa la lógica de inicio de sesión con Google
  };

  const handleAppleLogin = () => {
    // Implementa la lógica de inicio de sesión con Apple
  };

  const handleCreateUser = () => {
    // Implementa la lógica de creación de usuario
  };

  const logout = () => {
    // Implement logout functionality, e.g., clearing user data and tokens
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleGoogleLogin, handleAppleLogin, handleCreateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
