"use client"

import Link from "next/link"
import { useContext } from "react"
import { twMerge } from "tailwind-merge"
import AppContext from "../context/AppstateProvider"


function MobileMenuComponent() {
  const { isMenuOpen, setMenuState } = useContext(AppContext)

  const handlePageTransition = (arg: any) => {
    setMenuState(false)
  }

  return (
    <ul className={twMerge('absolute top-20 w-full mt-2 right-0 flex-col items-start gap-8 dark:text-gray-200 bg-white  dark:bg-stone-900 border border-b-stone-300 dark:border-orange-600/10 p-4 py-8 rounded-md hidden md:hidden', isMenuOpen && 'flex')}>
      <li
        onClick={handlePageTransition}
        className="hover:text-primary"><Link href="/guide">📌 Guide</Link></li>
      <li
        onClick={handlePageTransition}
        className="hover:text-primary"><Link href="/templates">🚀 Templates</Link></li>
      <li
        onClick={handlePageTransition}
        className="hover:text-primary"><Link href="/blog">📰 Blog</Link></li>
      <Link
        onClick={handlePageTransition}
        href='/documentation'
        className="btn-primary w-full rounded-md whitespace-nowrap"
      >
        API Documentation
      </Link>
    </ul>
  )
}

export default MobileMenuComponent