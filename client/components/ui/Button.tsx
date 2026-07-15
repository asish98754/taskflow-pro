"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant="primary"
}:ButtonProps){

return (

<button

className={`
px-8
py-3
rounded-lg
font-bold
text-lg
transition-all
transform
hover:scale-105
shadow-lg

${
variant==="primary"
?
"bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700"
:
"border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:border-blue-700"
}

`}

>

{children}

</button>

)

}
