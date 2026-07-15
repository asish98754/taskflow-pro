"use client";

export default function Footer(){

return (

<footer
className="
bg-gradient-to-r
from-blue-900
via-blue-800
to-cyan-900
text-white
mt-20
py-16
px-6
"
>

<div
className="
max-w-6xl
mx-auto
grid
md:grid-cols-4
gap-8
mb-8
"
>

<div>
<h4 className="font-bold text-lg mb-4">Product</h4>
<ul className="space-y-2 text-blue-100">
<li><a href="#" className="hover:text-white transition">Features</a></li>
<li><a href="#" className="hover:text-white transition">Pricing</a></li>
<li><a href="#" className="hover:text-white transition">Security</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-lg mb-4">Company</h4>
<ul className="space-y-2 text-blue-100">
<li><a href="#" className="hover:text-white transition">About</a></li>
<li><a href="#" className="hover:text-white transition">Blog</a></li>
<li><a href="#" className="hover:text-white transition">Careers</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-lg mb-4">Legal</h4>
<ul className="space-y-2 text-blue-100">
<li><a href="#" className="hover:text-white transition">Privacy</a></li>
<li><a href="#" className="hover:text-white transition">Terms</a></li>
<li><a href="#" className="hover:text-white transition">Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-lg mb-4">Connect</h4>
<ul className="space-y-2 text-blue-100">
<li><a href="#" className="hover:text-white transition">Twitter</a></li>
<li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
<li><a href="#" className="hover:text-white transition">GitHub</a></li>
</ul>
</div>

</div>

<div
className="
border-t
border-blue-700
pt-8
text-center
text-blue-100
"
>

<p>

© 2026 TaskFlow Pro. All rights reserved.

</p>

</div>

</footer>

)

}
