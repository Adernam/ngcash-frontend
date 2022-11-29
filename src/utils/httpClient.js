import axios from "axios";
import { useNavigate } from "react-router-dom";
export const api = "http://localhost:3003";

export const httpClient = axios.create({
  baseURL: api,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (!token) httpClient.defaults.headers.common.Authorization = null;

    config.headers.token = token;

    return config;
  },

  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const navigate = useNavigate();
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      window.alert(
        "Sua sessão expirou, por favor faça login novamente.",
        "error"
      );
      localStorage.removeItem("token");
      navigate("/");
    }

    return Promise.reject(error);
  }
);

export default httpClient;
