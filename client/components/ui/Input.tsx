"use client";

export default function Input(
{
placeholder
}:{
placeholder:string
}

){

return (

<input

placeholder={placeholder}

className="
w-full
rounded-lg
border
px-4
py-3
outline-none
focus:ring-2
focus:ring-black
"

/>

)

}

