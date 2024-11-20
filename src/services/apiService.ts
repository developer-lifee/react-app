
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const apiService = axios.create({
  baseURL: API_URL,
});

export const login = async (email, password) => {
  const response = await apiService.post('/auth/login', { email, password });
  return response.data;
};

export const googleAuth = async () => {
  window.location.href = `${API_URL}/auth/google`;
};

export const appleAuth = async () => {
  window.location.href = `${API_URL}/auth/apple`;
};