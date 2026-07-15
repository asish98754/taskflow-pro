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
py-20
px-6
bg-linear-to-b
from-blue-50
to-white
"
id="features"
>

<h2
className="
text-5xl
font-bold
text-center
bg-linear-to-r
from-blue-600
to-cyan-600
bg-clip-text
text-transparent
"
>

Everything You Need

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
