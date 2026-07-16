"use client";

import { CalendarDays, MessageCircle, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function ProfilePage() {
  const { user } = useAuth();
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "PF";

  return (
    <section className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/20">
        <div className="flex flex-col gap-6 rounded-[1.75rem] bg-gradient-to-br from-pink-500 via-orange-400 to-amber-300 p-6 text-slate-950 shadow-inner shadow-pink-500/10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 text-4xl font-bold text-pink-600 shadow-lg shadow-pink-500/20">
              {initials}
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-950/70">Your profile</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-950">{user?.name ?? "TaskFlow User"}</h1>
              <p className="mt-1 text-sm text-slate-950/80">{user?.email ?? "no-email@taskflow.com"}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-3xl border border-slate-900/40 bg-white/80 p-4 text-slate-950 shadow-md shadow-slate-950/10 sm:w-[320px]">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-600">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Status</p>
                <p className="text-sm font-semibold">Active now</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600">
                <CalendarDays className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Joined</p>
                <p className="text-sm font-semibold">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "—"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/10">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-2xl text-white shadow-md shadow-slate-950/20">
              <User className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Basic info</p>
              <p className="mt-2 text-lg font-semibold text-white">Name</p>
              <p className="text-sm text-slate-400">{user?.name ?? "—"}</p>
            </div>
          </div>

          <div className="mt-6 space-y-5 border-t border-slate-800/80 pt-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Email</p>
              <p className="mt-2 text-base text-white">{user?.email ?? "—"}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Account created</p>
              <p className="mt-2 text-base text-white">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "—"}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile details</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-white">Profile type</p>
              <p className="mt-1 text-sm text-slate-400">Web user dashboard</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-white">Preferred theme</p>
              <p className="mt-1 text-sm text-slate-400">Pink & orange accent</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-white">Last login</p>
              <p className="mt-1 text-sm text-slate-400">Today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
