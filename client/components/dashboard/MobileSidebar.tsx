import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

type MobileSidebarProps = {
  onClose: () => void;
};

const navItems: NavItem[] = [
  { href: "/dashboard", label: "🏠 Dashboard" },
  { href: "/tasks", label: "✅ Tasks" },
  { href: "/products", label: "🛍 Products" },
  { href: "/orders", label: "📦 Orders" },
  { href: "/profile", label: "👤 Profile" },
  { href: "/settings", label: "⚙ Settings" },
  { href: "/logout", label: "🚪 Logout" },
];

export default function MobileSidebar({ onClose }: MobileSidebarProps) {
  return (
    <aside className="z-50 h-full w-80 overflow-y-auto rounded-r-4xl border-r border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-slate-950/40 lg:hidden">
      <div className="mb-8 flex items-center justify-between">
        <div className="text-lg font-semibold text-white">TaskFlow Pro</div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-200 transition hover:bg-slate-800"
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
