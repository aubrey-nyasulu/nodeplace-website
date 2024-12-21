"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"

type Theme = 'light' | 'dark' | 'system'

type AppState = {
    currentTheme: Theme
    setThemeState: (arg?: any) => void
    isMenuOpen: boolean
    setMenuState: (state: boolean) => void
}

const initialState: AppState = {
    currentTheme: 'system',
    setThemeState() { },
    isMenuOpen: false,
    setMenuState() { }
}

const AppContext = createContext<AppState>(initialState)

export function AppStateProvider({ children }: { children: ReactNode }) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(initialState.currentTheme)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(initialState.isMenuOpen)

    useEffect(() => {
        if (!document) return

        const theme: Theme = localStorage.getItem('theme') as Theme || initialState.currentTheme

        setCurrentTheme(theme)
        setThemeState()
    }, [])

    function setMenuState(state: boolean) {
        if (!document) return

        setIsMenuOpen(state)
        const main = document.querySelector('main')
        const footer = document.querySelector('footer')

        main?.classList.toggle('blur', state)
        footer?.classList.toggle('blur', state)

        if (state) {
            document.documentElement.style.overflow = 'hidden';

            if (main) {
                main.style.pointerEvents = 'none'
            }

            if (footer) {
                footer.style.pointerEvents = 'none'
            }
        } else {
            document.documentElement.style.overflow = 'auto';

            if (main) {
                main.style.pointerEvents = 'all'
            }

            if (footer) {
                footer.style.pointerEvents = 'all'
            }

        }



    }

    function setThemeState(arg?: any) {
        if (currentTheme === 'light') {
            setCurrentTheme('dark')
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else if (currentTheme === 'dark') {
            setCurrentTheme('light')
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else if(currentTheme === 'system') {
            setCurrentTheme('dark')
            document.documentElement.classList.add('dark')
        }
    }

    return (
        <AppContext.Provider value={{
            currentTheme,
            setThemeState,
            isMenuOpen,
            setMenuState
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext