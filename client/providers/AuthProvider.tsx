"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import authService from "@/services/auth.service";
import { AuthContext, AuthUser, LoginPayload } from "@/context/AuthContext";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    const token = authService.getToken();
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await authService.getCurrentUser();
      const currentUser = response.data?.data?.user as AuthUser | undefined;
      setUser(currentUser ?? null);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (payload: LoginPayload) => {
    await authService.login(payload);
    await refreshUser();
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    router.push("/");
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const value = useMemo(
    () => ({ user, loading, login, logout, refreshUser }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
