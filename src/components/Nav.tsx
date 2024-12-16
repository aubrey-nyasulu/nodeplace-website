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

  useEffect(() => {
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')

    main?.classList.toggle('blur', menuOpen)
    footer?.classList.toggle('blur', menuOpen)
  }, [menuOpen])

  return (
    <nav className="w-screen px-4 lg:px-0 py-2 h-fit  fixed top-0 left-[50%] -translate-x-[50%] z-50 bg-white/10 dark:bg-black/10 backdrop-blur-3xl border-b border-b-stone-300/50 dark:border-b-stone-800 ">
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
            <div className="md:hidden grid place-content-center">
              <MenuComponent {...{ headerIsVisible, setMenuOpen }} />
            </div>
          </div>
          <ul className={twMerge('absolute top-20 w-full mt-2 right-0 flex-col items-start gap-8 dark:text-gray-200 bg-white  dark:bg-stone-900 border border-b-stone-300 dark:border-orange-600/10 p-4 py-8 rounded-md hidden md:hidden', menuOpen && 'flex')}>
            <li className="hover:text-primary"><Link href="/guide">📌 Guide</Link></li>
            <li className="hover:text-primary"><Link href="#">🚀 Templates</Link></li>
            <li className="hover:text-primary"><Link href="/blog">📰 Blog</Link></li>
            <Link
              href='/documentation'
              className="btn-primary w-full rounded-md whitespace-nowrap"
            >
              API Documentation
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav