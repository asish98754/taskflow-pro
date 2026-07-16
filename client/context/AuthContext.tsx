"use client";

import { createContext } from "react";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export type { LoginPayload, AuthContextValue };
