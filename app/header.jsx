"use client"

import Link from "next/link"
import { prata } from "./layout"
import { usePathname } from "next/navigation"

export default function Header(){
  const pathname = usePathname();
  
  return(
    <header className={prata.className}>
      <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>Home</Link>
      <Link href="/about" className={`${pathname === "/about" ? "active" : ""}`}>About Us</Link>
    </header>
  )
}