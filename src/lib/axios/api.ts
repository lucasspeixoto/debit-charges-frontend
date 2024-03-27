/* eslint-disable no-param-reassign */
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:6060',
});

const api = (_axios: AxiosInstance) => {
  return {
    get<T>(url: string, config: AxiosRequestConfig = {}) {
      return _axios.get<T>(url, config);
    },
    put<T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return _axios.put<T>(url, body, config);
    },
    post<T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return _axios.post<T>(url, body, config);
    },
    delete<T>(url: string, config: AxiosRequestConfig = {}) {
      return _axios.delete<T>(url, config);
    },
  };
};

export default api(axiosInstance);
