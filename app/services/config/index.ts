
import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL_BACKEND,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
