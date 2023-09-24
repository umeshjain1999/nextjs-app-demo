"use client"

import { Prata } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const prata = Prata({ subsets: ['latin'], weight: '400' })

export default function Header(){

  const { setTheme, theme } = useTheme();

  const pathname = usePathname();
  
  return(
    <header className={prata.className}>
      <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>Home</Link>
      <Link href="/about" className={`${pathname === "/about" ? "active" : ""}`}>About Us</Link>
      <button className="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "Dark" : "Light"} Mode</button>
    </header>
  )
}