
import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL_BACKEND,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
