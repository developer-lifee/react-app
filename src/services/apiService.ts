import axios from 'axios';
// Remove the import statement for process

const API_URL = 'https://api.icegeneralcontractors.com/api';

const apiService = axios.create({
  baseURL: API_URL,
});

export const login = async (email: string, password: string) => {
  const response = await apiService.post('/auth/login', { email, password });
  return response.data;
};

export const googleAuth = async () => {
  window.location.href = `${API_URL}/auth/google`;
};

export const appleAuth = async () => {
  window.location.href = `${API_URL}/auth/apple`;
};