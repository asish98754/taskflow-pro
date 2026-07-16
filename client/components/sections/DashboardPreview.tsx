"use client";

export default function DashboardPreview() {
  return (
    <section className="py-24 px-6 bg-slate-100 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-4xl border border-slate-200 bg-white shadow-[0_40px_120px_-50px_rgba(15,23,42,0.35)]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="px-8 py-12 sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Workflow analytics
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
              See progress at a glance.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              A simple dashboard preview helps teams stay aligned, keep deadlines visible, and monitor productivity without clutter.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Total Tasks", value: "1,248" },
                { label: "Completed", value: "934" },
                { label: "Team Members", value: "18" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                  <p className="mt-4 text-3xl font-bold text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative px-8 pb-8 sm:px-8">
            <div className="absolute -left-10 top-12 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 text-white shadow-xl">
              <div className="border-b border-slate-800 px-6 py-5 text-sm uppercase tracking-[0.3em] text-slate-400">
                Dashboard preview
              </div>
              <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Project velocity</p>
                    <p className="text-2xl font-semibold text-white">72%</p>
                  </div>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Stable
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Sprint task list", detail: "32 active" },
                    { title: "High priority", detail: "7 items" },
                    { title: "Upcoming due", detail: "4 tasks" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-800 px-6 py-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Design review', 'Release plan', 'QA checks'].map((item) => (
                    <div key={item} className="rounded-3xl bg-slate-900/95 p-4 text-sm text-slate-300">
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
