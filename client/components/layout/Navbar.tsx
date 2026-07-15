export default function Navbar(){

return (

<nav
className="
flex
items-center
justify-between
px-6
py-5
border-b
"
>

<h1
className="
text-2xl
font-bold
"
>
TaskFlow
</h1>

<div
className="
hidden
md:flex
gap-8
"
>

<a>
Features
</a>

<a>
Pricing
</a>

<a>
Login
</a>

</div>

<button
className="
md:hidden
"
>
☰
</button>

</nav>

)

}
