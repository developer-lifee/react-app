// src/util/axiosConfig.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Interceptor para incluir el token JWT en las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // O sessionStorage, según prefieras
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
