import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://my-portfolio-server-code.vercel.app/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

