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

const isTokenExpired = (token: string) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (typeof payload.exp !== "number") return false;
    return Date.now() >= payload.exp * 1000;
  } catch {
    return true;
  }
};

const signup = async (payload: SignupPayload) => {
  const response = await api.post("/auth/signup", payload);
  return response;
};

const login = async (payload: LoginPayload) => {
  const response = await api.post("/auth/login", payload);
  const token = response.data?.data?.token || response.data?.token;
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
const getCurrentUser = () => api.get("/auth/me");

const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;
  if (isTokenExpired(token)) {
    setToken(null);
    return false;
  }
  return true;
};

export default {
  signup,
  login,
  logout,
  getProfile,
  getCurrentUser,
  isAuthenticated,
  getToken,
};
