import React from "react";

interface ButtonProps {

children: React.ReactNode;

}

export default function Button({
children
}: ButtonProps){

return (

<button
className="
px-5
py-2.5
rounded-lg
bg-black
text-white
font-medium
hover:opacity-80
transition
"
>

{children}

</button>

)

}
