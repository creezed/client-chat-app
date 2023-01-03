import { API_URL } from "@utils/constants";
import axios from "axios";

export const axiosPublic = axios.create({ baseURL: API_URL, withCredentials: true });

const axiosPrivate = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

axiosPrivate.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers
        ? (config.headers.Authorization = `Bearer ${token}`)
        : (config.headers = { Authorization: `Bearer ${token}` });
    return config;
});
