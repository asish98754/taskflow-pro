"use client";

import Card from "../ui/Card";

const features=[

{
title:"Task Management",
text:"Create, edit and organize tasks easily."
},

{
title:"Team Collaboration",
text:"Work together with your team."
},

{
title:"Analytics",
text:"Track productivity with reports."
},

];

export default function Features(){

return (

<section
className="
py-24
px-6
bg-slate-50
sm:px-10
lg:px-12
"
id="features"
>

<h2
className="
text-5xl
font-bold
text-center
leading-tight
bg-linear-to-r
from-blue-600
via-cyan-500
to-cyan-600
bg-clip-text
text-transparent
"
>

Everything You Need

</h2>

<p className="mt-4 text-center text-lg text-slate-600 max-w-2xl mx-auto leading-8">
  TaskFlow Pro brings task planning, collaboration, and analytics together in a clean, easy-to-use experience.
</p>

<div
className="
grid
grid-cols-1
gap-8
max-w-6xl
mx-auto
mt-14
sm:grid-cols-2
lg:grid-cols-3
"
>

{
features.map((item)=>(

<Card key={item.title}>

<h3
className="
text-xl
font-bold
"
>

{item.title}

</h3>

<p
className="
mt-3
text-gray-600
"
>

{item.text}

</p>

</Card>

))
}

</div>

</section>

)

}
