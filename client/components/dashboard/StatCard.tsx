import { ReactNode } from "react";

export default function StatCard({
  title,
  value,
  icon,
  color = "bg-slate-900 text-white",
}: {
  title: string;
  value: string | number;
  icon?: ReactNode;
  color?: string;
}) {
  return (
    <div className="rounded-4xl border border-slate-800 bg-slate-950/90 p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{title}</p>
          <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
        </div>
        {icon ? (
          <div className={`flex h-14 w-14 items-center justify-center rounded-3xl ${color}`}>
            {icon}
          </div>
        ) : null}
      </div>
    </div>
  );
}
