"use client";

export default function DashboardPreview(){

return (

<section
className="
py-20
px-6
bg-gradient-to-b
from-white
to-blue-50
"
>

<div
className="
max-w-5xl
mx-auto
rounded-2xl
border-2
border-blue-200
p-12
bg-white
shadow-xl
"
>

<div
className="
grid
md:grid-cols-3
gap-6
"
>

{
[
"Total Tasks",
"Completed",
"Team Members"
].map(item=>(

<div
key={item}
className="
border
rounded-xl
p-6
"
>

<h3
className="
font-bold
"
>

{item}

</h3>

<p
className="
text-3xl
mt-4
"
>

120

</p>

</div>

))
}

</div>

</div>

</section>

)

}