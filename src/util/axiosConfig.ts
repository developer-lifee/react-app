// src/util/axiosConfig.ts
import axios from 'axios';

// Crear una instancia de Axios
const api = axios.create({
  baseURL: 'https://api.icegeneralcontractors.com/api', // Reemplaza con la URL de tu API
});

// Interceptor para agregar el token a las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Obtener el token desde localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
