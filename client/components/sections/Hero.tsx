"use client";

import Link from "next/link";

export default function Hero(){
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-linear-to-b from-blue-50 via-cyan-50 to-blue-100">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Manage Your Business Tasks
          With One Powerful Platform
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          TaskFlow Pro helps teams organize projects, manage tasks and grow productivity with powerful collaboration tools.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-3 text-lg font-bold text-white transition hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700"
          >
            Sign Up / Get Started
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 bg-white px-8 py-3 text-lg font-bold text-blue-600 transition hover:bg-blue-50 hover:border-blue-700"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
