import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Define the configuration for the Axios instance
const config: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || '',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosClient: AxiosInstance = axios.create(config);

export default axiosClient;
