'use client'

import ThemeSwitcher from "@/src/components/ThemeSwitcher"
import UList from "./UList";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuComponent from "./MenuComponent";
import { twMerge } from "tailwind-merge";
import MobileMenuComponent from "./MobileMenuComponent";

function Nav() {

  return (
    <nav className="w-screen px-4 lg:px-0 py-2 h-fit  fixed top-0 left-[50%] -translate-x-[50%] z-50 bg-white/10 dark:bg-black/10 backdrop-blur-3xl border-b border-b-stone-400/50 dark:border-b-stone-800 ">
      <div className="langingpage-container flex items-center justify-between">
        <Logo />

        <div className="flex gap-16 items-center">
          <UList />

          <div className="relative flex items-center justify-between gap-4 md:gap-6">
            <ThemeSwitcher />
            <Link
              href='/documentation'
              className="btn-primary py-4 hidden md:block whitespace-nowrap"
            >
              API Documentation
            </Link>
            <div className="md:hidden grid place-content-center">
              <MenuComponent />
            </div>
          </div>
          <MobileMenuComponent />
        </div>
      </div>
    </nav>
  )
}

export default Nav