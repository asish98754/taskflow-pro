"use client";

import axios from "axios";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import authService from "../../services/auth.service";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.login({ email, password });
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
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-slate-950/90 p-8 shadow-2xl shadow-cyan-900/40 border border-white/10 backdrop-blur-xl">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-3">Login</h1>
        <p className="text-slate-400 mb-8">Log in to continue managing your tasks and profile securely.</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-medium text-slate-300">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="john@example.com"
              className="mt-2 block w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-300">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="mt-2 block w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
              required
            />
          </label>

          {error && <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:from-cyan-400 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-semibold text-white hover:text-cyan-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
