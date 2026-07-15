"use client";

import React from "react";

export default function Card({
children
}:{
children:React.ReactNode
}){

return (

<div
className="
rounded-2xl
border-2
border-blue-200
p-8
shadow-md
bg-white
hover:shadow-xl
hover:border-blue-400
transition-all
transform
hover:-translate-y-1
"
>

{children}

</div>

)

}
