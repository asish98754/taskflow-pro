"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function UserMenu() {
  const [expanded, setExpanded] = useState(false);
  const { user, logout } = useAuth();

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "GU";

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow-sm shadow-slate-950/20 transition hover:bg-slate-800"
        aria-expanded={expanded}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-sm font-semibold uppercase text-slate-950">
          {initials}
        </div>
        <span className="font-semibold text-white">{user?.name ?? "Guest"}</span>
        <span className="text-base text-slate-200">▾</span>
      </button>

      {expanded && (
        <div className="absolute right-0 top-full z-10 mt-3 w-52 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-950/40">
          <div className="flex flex-col gap-1 p-2">
            <Link
              href="/profile"
              className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white"
              onClick={() => setExpanded(false)}
            >
              My Profile
            </Link>
            <Link
              href="/settings"
              className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white"
              onClick={() => setExpanded(false)}
            >
              Settings
            </Link>
            <button
              type="button"
              onClick={async () => {
                setExpanded(false);
                await logout();
              }}
              className="w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
