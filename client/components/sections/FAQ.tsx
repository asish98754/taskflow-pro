"use client";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-slate-50 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">FAQ</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Answers to your top questions.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Quick details on pricing, collaboration, and how TaskFlow Pro helps your team stay productive.
        </p>
      </div>

      <div className="mx-auto mt-12 grid gap-6 lg:max-w-6xl lg:grid-cols-2">
        {[
          {
            question: "How does pricing work?",
            answer: "Choose the plan that fits your team size and upgrade anytime as your projects grow.",
          },
          {
            question: "Can my team collaborate in real time?",
            answer: "Yes — TaskFlow lets teams assign tasks, comment on work, and see updates instantly.",
          },
          {
            question: "Is my data secure?",
            answer: "We use industry-standard encryption and secure access controls to keep every project safe.",
          },
          {
            question: "Can I switch plans later?",
            answer: "Absolutely — you can upgrade or change your plan at any time as your needs evolve.",
          },
        ].map((item) => (
          <div key={item.question} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="text-xl font-semibold text-slate-950">{item.question}</h3>
            <p className="mt-4 text-slate-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
