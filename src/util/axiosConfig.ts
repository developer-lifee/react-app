import axios from 'axios';

const api = axios.create({
  baseURL: 'http://147.79.75.135:3000/api',
});

export default api;
