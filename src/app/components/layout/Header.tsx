import Link from "next/link";

export default function Header(){
    return(
        <header className="flex items-center justify-between">
        <Link href="" className="text-bg-light-green font-black text-2xl">GLADZ PIZZA</Link>
        <nav className="flex items-center gap-8 text-gray-700 font-extrabold">
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''} className="bg-bg-light-green text-white px-8 py-2 rounded-full">Login</Link>
        
        </nav>
      </header>
    )
}