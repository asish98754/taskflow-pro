"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { navigation } from "@/constants/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside className="h-full w-72 flex flex-col justify-between border-r border-slate-200 bg-white p-6">
      <div>
        <div className="mb-10 rounded-3xl bg-slate-50 p-5 shadow-sm">
          <p className="text-2xl">🚀 TaskFlow Pro</p>
          <p className="mt-2 text-sm text-slate-500">Manage everything in one place</p>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-4 rounded-3xl bg-slate-50 p-5 shadow-sm">
        <div>
          <p className="text-sm font-semibold text-slate-900">{user?.name ?? "Guest User"}</p>
          <p className="text-sm text-slate-500">{user?.email ?? "guest@example.com"}</p>
        </div>
        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
