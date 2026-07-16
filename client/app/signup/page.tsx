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
    <div className="relative min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10">
      <div className="grid w-full max-w-6xl gap-8 overflow-hidden rounded-4xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-violet-900/20 backdrop-blur-xl md:grid-cols-[1.35fr_1.65fr]">
        <div className="relative hidden flex-col justify-center gap-6 bg-linear-to-br from-violet-700 via-fuchsia-700 to-slate-950 px-10 py-12 text-white md:flex">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_right,#a78bfa_18%,transparent_45%)]" />
          <div className="absolute -left-10 bottom-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-violet-100">
              Join TaskFlow
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight">Create your workspace</h2>
            <p className="mt-4 max-w-md text-slate-100/90">
              Register and start organizing work, assigning tasks, and tracking progress with your team.
            </p>

            <ul className="mt-8 space-y-4 text-slate-100/90">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-violet-300">•</span>
                <span>Instant onboarding for your team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-violet-300">•</span>
                <span>Secure account and profile setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-violet-300">•</span>
                <span>Ready for project planning</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative p-8 md:p-12">
          <div className="absolute top-4 left-4 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative z-10 rounded-3xl bg-slate-950/95 p-8 shadow-2xl shadow-slate-900/40 ring-1 ring-white/10">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Create account</p>
              <h1 className="mt-3 text-3xl font-bold text-white">Sign up for TaskFlow Pro</h1>
              <p className="mt-3 text-slate-400">Create your secure account to manage tasks, projects, and team productivity.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 block w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
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
                  className="mt-2 block w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
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
                  className="mt-2 block w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
                  required
                  minLength={8}
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
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-violet-500 to-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:from-violet-400 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
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
                    Signing up...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-white hover:text-cyan-300">
                Log in
              </Link>
            </p>

            <p className="mt-4 text-center text-xs text-slate-500">
              By signing up, you agree to our{' '}
              <Link href="/" className="text-cyan-300 hover:text-cyan-200">
                Terms
              </Link>{' '}
              and{' '}
              <Link href="/" className="text-cyan-300 hover:text-cyan-200">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
      </div>

      {showSuccessDialog && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/80 px-4">
          <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900 p-8 text-center shadow-2xl shadow-cyan-900/40">
            <div className="mb-6 rounded-full bg-emerald-500/10 p-5 text-3xl text-emerald-300">✅</div>
            <h2 className="text-2xl font-bold text-white mb-3">Account Created</h2>
            <p className="text-slate-300 mb-6">Your account has been created successfully. You can now log in and start using TaskFlow Pro.</p>
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
