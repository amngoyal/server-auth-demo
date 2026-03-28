import axios from "axios";

const axiosClient = axios.create({
  baseURL: typeof window !== "undefined" ? "" : undefined,
  withCredentials: true,
});

export default axiosClient;
