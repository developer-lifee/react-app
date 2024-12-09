import axios from 'axios';

const API_URL = 'https://api.icegeneralcontractors.com/api';

const apiService = axios.create({
  baseURL: API_URL,
});

export const login = async (email: string, password: string) => {
  try {
    const response = await apiService.get(`/users/email/${email}`);
    const user = response.data;
    // Validate the password (assuming the server returns the hashed password)
    const isPasswordValid = password === user.password; // Replace with actual validation logic
    if (isPasswordValid) {
      return user;
    } else {
      throw new Error('Invalid password');
    }
  } catch (error) {
    const err = error as { response?: { data: any }; message: string };
    console.error('Login failed', err.response ? err.response.data : err.message);
    throw new Error('Login failed');
  }
};

export const googleAuth = async () => {
  window.location.href = `${API_URL}/auth/google`;
};

export const appleAuth = async () => {
  window.location.href = `${API_URL}/auth/apple`;
};