import axios, { AxiosInstance } from "axios";

// export const API_URL = process.env.REACT_APP_BACKEND_API_URL;
export const API_URL = 'http://localhost:8000/api/v1';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
})