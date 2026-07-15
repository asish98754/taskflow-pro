"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import authService from "../../services/auth.service";

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("User");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await authService.getProfile();
        setUserName(response.data?.data?.user?.name || "User");
      } catch (err: unknown) {
        let status: number | undefined;
        let message = "Unable to load profile.";
        if (axios.isAxiosError(err)) {
          status = err.response?.status;
          message = err.response?.data?.message || err.message || message;
        } else if (err instanceof Error) {
          message = err.message;
        }
        if (status === 401) {
          router.push("/login");
          return;
        }
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [router]);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await authService.logout();
      router.push("/");
    } catch {
      setError("Unable to log out. Please try again.");
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-slate-900 to-cyan-900 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl rounded-4xl bg-slate-950/90 p-10 shadow-2xl shadow-cyan-900/30 border border-white/10 backdrop-blur-xl">
        <div className="rounded-3xl bg-linear-to-br from-blue-700 to-cyan-500 p-10 text-center shadow-xl shadow-cyan-900/20">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">Dashboard</h1>
            {loading ? (
              <p className="text-xl text-slate-100">Loading profile...</p>
            ) : error ? (
              <p className="text-lg text-rose-100">{error}</p>
            ) : (
              <p className="text-xl text-slate-100">Welcome, {userName}</p>
            )}
            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="mt-4 rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
