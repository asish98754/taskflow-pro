"use client";

import axios from "axios";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      router.push("/dashboard");
    } catch (err: unknown) {
      let backendMessage = "Invalid email or password.";
      if (axios.isAxiosError(err)) {
        backendMessage = err.response?.data?.message || err.message || backendMessage;
      } else if (err instanceof Error) {
        backendMessage = err.message;
      }
      setError(backendMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10">
      <div className="grid w-full max-w-6xl gap-8 overflow-hidden rounded-4xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-cyan-900/20 backdrop-blur-xl md:grid-cols-[1.35fr_1.65fr]">
        <div className="relative hidden flex-col justify-center gap-6 bg-linear-to-br from-cyan-600 via-blue-700 to-slate-950 px-10 py-12 text-white md:flex">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,#38bdf8_20%,transparent_42%)]" />
          <div className="absolute -right-10 top-1/4 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-cyan-100">
              Secure access
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight">Welcome back to TaskFlow Pro</h2>
            <p className="mt-4 max-w-md text-slate-100/90">
              Access your workspace, manage tasks, and keep your team aligned with a fast, secure login.
            </p>

            <ul className="mt-8 space-y-4 text-slate-100/90">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-300">•</span>
                <span>Secure team task management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-300">•</span>
                <span>Fast access to dashboards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-300">•</span>
                <span>Built for modern teams</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative p-8 md:p-12">
          <div className="absolute top-4 right-4 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative z-10 rounded-3xl bg-slate-950/95 p-8 shadow-2xl shadow-slate-900/40 ring-1 ring-white/10">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Sign in</p>
              <h1 className="mt-3 text-3xl font-bold text-white">Welcome back</h1>
              <p className="mt-3 text-slate-400">Log in to continue managing your tasks and projects securely.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="john@example.com"
                  className="mt-2 block w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                  required
                />
              </label>

              <label className="block">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-slate-300">Password</span>
                  <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
                    Forgot password?
                  </Link>
                </div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 block w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                  required
                />
              </label>

              {error && (
                <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:from-cyan-400 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                      <path
                        d="M22 12a10 10 0 00-10-10"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-semibold text-white hover:text-cyan-300">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
