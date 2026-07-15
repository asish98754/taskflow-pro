"use client";

import Link from "next/link";

export default function Navbar(){

return (

<nav
className="
sticky
top-0
z-50
flex
items-center
justify-between
px-8
py-5
bg-linear-to-r
from-blue-600
via-blue-500
to-cyan-600
shadow-lg
"
>

<h1
className="
text-3xl
font-bold
text-white
"
>
TaskFlow Pro
</h1>

<div
className="
hidden
md:flex
gap-8
items-center
"
>

<a href="#features" className="text-white font-semibold hover:text-blue-100 transition cursor-pointer">
Features
</a>

<a href="#pricing" className="text-white font-semibold hover:text-blue-100 transition cursor-pointer">
Pricing
</a>

<a href="#contact" className="text-white font-semibold hover:text-blue-100 transition cursor-pointer">
Contact
</a>

<Link href="/login" className="px-6 py-2 rounded-lg bg-white text-blue-600 font-bold hover:bg-blue-50 transition transform hover:scale-105">
Login
</Link>

</div>

<button
className="
md:hidden
"
>
☰
</button>

</nav>

)

}

