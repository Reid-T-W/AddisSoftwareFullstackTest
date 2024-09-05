import axios, { AxiosInstance } from "axios";

export const API_URL = import.meta.env.VITE_REACT_APP_BACKEND_API_URL;

// Creating an axios instance with a baseURL set to be used on
// every request
export const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
})