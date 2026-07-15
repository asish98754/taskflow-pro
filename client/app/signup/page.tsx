"use client";

import axios from "axios";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import authService from "../../services/auth.service";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setShowSuccessDialog(false);
    setLoading(true);

    try {
      await authService.signup({ name, email, password });
      setShowSuccessDialog(true);
    } catch (err: unknown) {
      let backendMessage = "Unable to create account.";
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
    <div className="relative min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-violet-900 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-slate-950/90 p-8 shadow-2xl shadow-violet-900/40 border border-white/10 backdrop-blur-xl">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-3">Create your account</h1>
        <p className="text-slate-400 mb-8">Sign up to manage your tasks, projects, and profile in one secure place.</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-medium text-slate-300">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="John Doe"
              className="mt-2 block w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-300">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="john@example.com"
              className="mt-2 block w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
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
              className="mt-2 block w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
              required
              minLength={8}
            />
          </label>

          {error && <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-linear-to-r from-violet-500 to-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:from-violet-400 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-white hover:text-cyan-300">
            Log in
          </Link>
        </p>
      </div>

      {showSuccessDialog && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/80 px-4">
          <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900 p-8 text-center shadow-2xl shadow-cyan-900/40">
            <div className="mb-6 rounded-full bg-emerald-500/10 p-5 text-3xl text-emerald-300">✅</div>
            <h2 className="text-2xl font-bold text-white mb-3">Account Created</h2>
            <p className="text-slate-300 mb-6">Your account has been created successfully. You can now log in.</p>
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="inline-flex rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:from-cyan-400 hover:to-blue-400"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
