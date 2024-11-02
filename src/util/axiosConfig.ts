import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.icegeneralcontractors.com/api',
});

export default api;
