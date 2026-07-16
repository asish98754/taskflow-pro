"use client";

export default function Contact(){

return (

<section
className="
py-24
px-6
bg-slate-50
sm:px-10
lg:px-12
"
id="contact"
>

<h2
className="
text-5xl
font-bold
text-center
text-slate-950
"
>

Contact Us

</h2>

<p className="mt-4 text-center text-lg text-slate-600 max-w-2xl mx-auto leading-8">
  Need help or want to talk to sales? Send us a message and we&rsquo;ll get back to you fast.
</p>

<div className="mx-auto mt-12 max-w-xl rounded-4xl bg-white p-10 shadow-[0_40px_90px_-50px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/60">
        <form className="space-y-5">

          <input
            placeholder="Your Name"
            className="border border-slate-200 p-4 w-full rounded-3xl focus:border-cyan-500 focus:outline-none transition"
          />

          <input
            placeholder="Your Email"
            className="border border-slate-200 p-4 w-full rounded-3xl focus:border-cyan-500 focus:outline-none transition"
          />

          <textarea
            placeholder="Your Message"
            className="border border-slate-200 p-4 w-full rounded-3xl focus:border-cyan-500 focus:outline-none transition min-h-32 resize-none"
          />

          <button
            className="w-full rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 font-bold hover:shadow-xl transition text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
)

}

