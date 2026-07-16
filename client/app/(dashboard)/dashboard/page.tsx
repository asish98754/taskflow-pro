"use client";

import Link from "next/link";
import { CheckCircle2, CheckSquare, Package, ShoppingCart } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import StatCard from "@/components/dashboard/StatCard";
import RecentTasks from "@/components/dashboard/RecentTasks";
import { useAuth } from "@/hooks/useAuth";

const stats = [
  {
    title: "Total Tasks",
    value: 24,
    icon: <CheckSquare className="h-6 w-6 text-white" />,
    color: "bg-cyan-500",
  },
  {
    title: "Completed Tasks",
    value: 18,
    icon: <CheckCircle2 className="h-6 w-6 text-white" />,
    color: "bg-emerald-500",
  },
  {
    title: "Products",
    value: 12,
    icon: <Package className="h-6 w-6 text-white" />,
    color: "bg-violet-500",
  },
  {
    title: "Orders",
    value: 5,
    icon: <ShoppingCart className="h-6 w-6 text-white" />,
    color: "bg-orange-500",
  },
];

export default function DashboardHomePage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <section className="rounded-4xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-cyan-950/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Welcome back, {user?.name ?? "Guest"} 👋</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Here&apos;s your business overview today.</h1>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href="/tasks"
              className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              + New Task
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-3xl bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
            >
              + Add Product
            </Link>
            <Link
              href="/orders"
              className="inline-flex items-center justify-center rounded-3xl border border-slate-700 bg-slate-950 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              View Orders
            </Link>
          </div>
        </div>
      </section>

      <DashboardCard title="Business overview">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>
      </DashboardCard>

      <RecentTasks />
    </div>
  );
}
