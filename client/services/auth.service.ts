import api from "../lib/api";
import type { AxiosRequestConfig, AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";

interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

const TOKEN_KEY = "taskflow_token";

const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string | null) => {
  if (typeof window === "undefined") return;
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
};

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers ?? ({} as AxiosRequestHeaders);
    if (typeof config.headers === "object" && !Array.isArray(config.headers)) {
      (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

const signup = async (payload: SignupPayload) => {
  const response = await api.post("/auth/signup", payload);
  return response;
};

const login = async (payload: LoginPayload) => {
  const response = await api.post("/auth/login", payload);
  const token = response.data?.data?.token;
  if (token) {
    setToken(token);
  }
  return response;
};

const logout = async () => {
  setToken(null);
  return api.post("/auth/logout");
};

const getProfile = () => api.get("/auth/profile");

const isAuthenticated = () => Boolean(getToken());

export default {
  signup,
  login,
  logout,
  getProfile,
  isAuthenticated,
};
