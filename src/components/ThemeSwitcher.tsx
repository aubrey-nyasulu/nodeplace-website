"use client"

import { Moon, MoonSun, Sun } from "@/src/assets/SVGComponents"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

function ThemeSwitcher({ headerIsVisible }: { headerIsVisible: boolean }) {
    const [currentTheme, setCurrentTheme] = useState('')
    const [color, setColor] = useState('black')

    const applyTheme = (theme: 'light' | 'dark' | 'system') => {
        if (theme === 'light') {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }

    const path = usePathname()
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light'
        setCurrentTheme(theme)
        if (theme === 'light' || theme === 'dark') {
            applyTheme(theme)
        }

        if (path === '/') {
            if (currentTheme !== 'dark') {
                setColor(headerIsVisible ? 'white' : 'black')
            }
        }
    }, [currentTheme, headerIsVisible])


    return (
        <button
            onClick={() => {
                if (currentTheme === 'light') {
                    setCurrentTheme('dark')
                    applyTheme('dark')
                } else if (currentTheme === 'dark') {
                    setCurrentTheme('light')
                    applyTheme('light')
                } else {
                    applyTheme('dark')
                    setCurrentTheme('dark')
                }
            }}
        >
            {currentTheme === 'light' && <Sun {...{ color: color }} />}
            {currentTheme === 'dark' && <Moon />}
            {currentTheme === '' && <MoonSun {...{ color: color }} />}
        </button>
    )
}

export default ThemeSwitcher