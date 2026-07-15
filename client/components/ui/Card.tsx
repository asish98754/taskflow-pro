import React from "react";

export default function Card({
children
}:{
children:React.ReactNode
}){

return (

<div
className="
rounded-xl
border
p-6
shadow-sm
bg-white
"
>

{children}

</div>

)

}
