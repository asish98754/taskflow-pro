"use client";

import Button from "../ui/Button";

export default function Hero(){

return (

<section
className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100"
>

<div
className="max-w-5xl mx-auto text-center"
>

<h1
className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6"
>

Manage Your Business Tasks
With One Powerful Platform

</h1>

<p
className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
>

TaskFlow Pro helps teams organize projects, manage tasks and grow productivity with powerful collaboration tools.

</p>

<div
className="
mt-10
flex
justify-center
gap-4
flex-wrap
"
>

<Button>

Get Started

</Button>

<Button variant="secondary">

View Demo

</Button>

</div>

</div>

</section>

)

}