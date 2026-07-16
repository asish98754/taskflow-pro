"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100 mt-20 py-16 px-6 sm:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(220px,1fr)_repeat(3,minmax(180px,1fr))]">
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">TaskFlow Pro</h4>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Built for teams that want clear workflows, better planning, and more predictable deliveries.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Product</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="transition hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href="#" className="transition hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Connect</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
        © 2026 TaskFlow Pro. All rights reserved.
      </div>
    </footer>
  );
}

