"use client";

import Card from "../ui/Card";

const plans=[
"Starter",
"Professional",
"Enterprise"
];

export default function Pricing(){

return (

<section
className="
py-20
px-6
bg-gradient-to-b
from-white
to-blue-50
"
id="pricing"
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

Simple Pricing

</h2>

<div
className="
grid
md:grid-cols-3
gap-8
max-w-6xl
mx-auto
mt-12
"
>

{
plans.map(plan=>(

<Card key={plan}>

<h3
className="
text-2xl
font-bold
text-blue-600
"
>

{plan}

</h3>

<p
className="
mt-5
text-4xl
font-bold
text-gray-900
"
>

$19/mo

</p>

<button
className="
mt-8
w-full
rounded-lg
bg-gradient-to-r
from-blue-600
to-cyan-600
text-white
py-3
font-bold
hover:shadow-lg
transition
"
>

Choose Plan

</button>

</Card>

))
}

</div>

</section>

)

}