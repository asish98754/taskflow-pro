"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
          TaskFlow Pro
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-semibold text-slate-200 transition hover:text-white">
            Features
          </a>
          <a href="#pricing" className="text-sm font-semibold text-slate-200 transition hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="text-sm font-semibold text-slate-200 transition hover:text-white">
            FAQ
          </a>
          <a href="#contact" className="text-sm font-semibold text-slate-200 transition hover:text-white">
            Contact
          </a>
          <Link href="/signup" className="rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white transition hover:border-slate-500 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#features" className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-900 hover:text-white">
              Features
            </a>
            <a href="#pricing" className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-900 hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-900 hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-900 hover:text-white">
              Contact
            </a>
            <Link href="/signup" className="rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-3 text-sm font-semibold text-white text-center transition hover:brightness-110">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

