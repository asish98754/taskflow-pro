"use client";

export default function Contact(){

return (

<section
className="
py-20
px-6
bg-gradient-to-b
from-blue-50
to-cyan-50
"
id="contact"
>

<h2
className="
text-5xl
font-bold
text-center
bg-gradient-to-r
from-blue-600
to-cyan-600
bg-clip-text
text-transparent
"
>

Contact Us

</h2>

<form
className="
max-w-xl
mx-auto
mt-12
space-y-5
bg-white
p-10
rounded-2xl
shadow-lg
border-2
border-blue-100
"
>

<input
placeholder="Your Name"
className="border-2 border-blue-200 p-4 w-full rounded-lg focus:border-blue-600 focus:outline-none transition"
/>

<input
placeholder="Your Email"
className="border-2 border-blue-200 p-4 w-full rounded-lg focus:border-blue-600 focus:outline-none transition"
/>

<textarea
placeholder="Your Message"
className="
border-2
border-blue-200
p-4
w-full
rounded-lg
focus:border-blue-600
focus:outline-none
transition
min-h-32
"
/>

<button
className="
bg-gradient-to-r
from-blue-600
to-cyan-600
text-white
px-8
py-3
w-full
rounded-lg
font-bold
hover:shadow-lg
transition
text-lg
rounded-xl
"
>

Send Message

</button>

</form>

</section>

)

}