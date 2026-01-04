import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_SERVER_URL,
  baseURL: "http://localhost:3000",
  timeout: 15000,           
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
