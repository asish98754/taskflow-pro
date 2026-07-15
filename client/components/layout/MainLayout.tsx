"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({
children
}:{
children:React.ReactNode
}){

return (

<div>

<Navbar/>

<main>

{children}

</main>

<Footer/>

</div>

)

}