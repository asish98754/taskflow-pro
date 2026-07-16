"use client";

import { Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";
import UserMenu from "@/components/dashboard/UserMenu";

export default function TopNavbar() {
  const pathname = usePathname();
  const currentItem = navigation.find(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
  );
  const pageTitle = currentItem?.name ?? "Dashboard";

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">{pageTitle}</h1>
      </div>

      <div className="flex flex-1 items-center justify-center px-6">
        <div className="relative w-full max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search tasks, products..."
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => console.log("Notifications")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        <UserMenu />
      </div>
    </header>
  );
}
