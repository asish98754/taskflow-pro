"use client";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Customer stories</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Loved by teams that ship faster.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
          TaskFlow Pro helps teams reduce friction, improve clarity, and stay on top of every delivery milestone.
        </p>
      </div>

      <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl">
        {[
          {
            quote: "TaskFlow has transformed the way our product team plans and executes work. The dashboard is clear and the collaboration tools are excellent.",
            name: "Maya Patel",
            title: "Product Lead, Brightline",
          },
          {
            quote: "We finally have one place to track tasks, manage deadlines, and keep stakeholders aligned. The interface feels polished and fast.",
            name: "Jordan Lee",
            title: "Operations Manager, Elite Labs",
          },
          {
            quote: "The onboarding was smooth, and our team loves the task views. TaskFlow has become our go-to platform for project planning.",
            name: "Amina Hassan",
            title: "Team Lead, Sparkline",
          },
        ].map((item) => (
          <div key={item.name} className="rounded-4xl border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-500/30">
            <p className="text-base leading-8 text-slate-300">“{item.quote}”</p>
            <div className="mt-8">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="mt-1 text-sm text-slate-400">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
