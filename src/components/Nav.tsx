'use client'

import ThemeSwitcher from "@/src/components/ThemeSwitcher"
import { Menu } from "@/src/assets/SVGComponents"
import UList from "./UList";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuComponent from "./MenuComponent";
import { twMerge } from "tailwind-merge";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerIsVisible, setHeaderIsVisible] = useState(true)

  useEffect(() => {
    if (!document) return

    const scrollCallback = () => {
      const header = document.querySelector('header')

      if (!header) return

      const { bottom } = header.getBoundingClientRect()
      let temp: number
      // console.log(textColor === 'text-gray-950' && bottom < 10, { bottom })
      if (headerIsVisible && bottom > 10) return
      if (!headerIsVisible && bottom < 10) return
      if (bottom < 10) {
        setHeaderIsVisible(false)
      } else {
        setHeaderIsVisible(true)
      }
    }

    document.addEventListener('scroll', scrollCallback)

    return () => document.removeEventListener('scroll', scrollCallback)
  }, [headerIsVisible])

  return (
    <nav className="w-screen px-4 lg:px-0 py-2 h-fit  fixed top-0 left-[50%] -translate-x-[50%] z-50 bg-white/10 dark:bg-black/10 backdrop-blur-lg border-b border-b-stone-300/50 dark:border-b-stone-800 ">
      <div className="langingpage-container flex items-center justify-between">
        <Logo {...{ headerIsVisible }} />

        <div className="flex gap-16 items-center">
          <UList {...{ headerIsVisible }} />

          <div className="relative flex items-center justify-between gap-4 md:gap-6">
            <ThemeSwitcher {...{ headerIsVisible }} />
            <Link
              href='/documentation'
              className="btn-primary py-4 hidden md:block whitespace-nowrap"
            >
              API Documentation
            </Link>
            <div className="md:hidden">
              <MenuComponent {...{ headerIsVisible, setMenuOpen }} />

              <ul className={twMerge('absolute mt-2 right-0 flex-col items-center gap-8 dark:text-gray-200 bg-white  dark:bg-stone-900 border-b border-b-stone-300 dark:border-b-stone-800 p-16 py-8 rounded-md hidden', menuOpen && 'flex')}>
                <li className="hover:text-primary"><Link href="/guide">Guide</Link></li>
                <li className="hover:text-primary"><Link href="#">Templates</Link></li>
                <li className="hover:text-primary"><Link href="#">Blog</Link></li>
                <Link
                  href='/documentation'
                  className="btn-primary whitespace-nowrap"
                >
                  API Documentation
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav