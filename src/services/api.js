import axios from 'axios';

// Create an instance of Axios with default configuration
const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace this with your backend URL if different
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add Authorization header (if needed)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Assuming you are storing JWT in localStorage
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
