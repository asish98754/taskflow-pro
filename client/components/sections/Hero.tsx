"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-cyan-500/20 to-transparent blur-3xl" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              TaskFlow Pro
            </span>
            <h1 className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Manage every task, team, and deadline with confidence.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              A modern task platform built for growing teams. Plan work, track progress, and deliver faster with an intuitive dashboard and powerful workflows.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:brightness-110"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/15"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Trusted by teams", value: "120+" },
                { label: "Tasks managed", value: "18K+" },
                { label: "Active projects", value: "560+" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-3xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40">
              <div className="flex items-center justify-between rounded-3xl bg-slate-950/95 px-5 py-4 shadow-inner shadow-slate-950/20">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Team performance</p>
                  <p className="mt-1 text-2xl font-bold text-white">Dashboard overview</p>
                </div>
                <div className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Live
                </div>
              </div>
              <div className="mt-8 space-y-6">
                {[
                  { title: "Completed", value: "86%" },
                  { title: "On track", value: "64%" },
                  { title: "Weekly growth", value: "+18%" },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl bg-slate-950/95 px-5 py-4 border border-white/10">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm text-slate-400">{item.title}</p>
                      <p className="text-xl font-semibold text-white">{item.value}</p>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500" style={{ width: item.value === "+18%" ? "55%" : item.value }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-3xl bg-slate-950/95 p-5">
                <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                  <span>Active projects</span>
                  <span>12/15</span>
                </div>
                <div className="grid gap-3">
                  {['Design', 'Launch', 'Support'].map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-900/90 px-4 py-3 text-sm text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
