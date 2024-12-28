"ue client"

import { useContext, useEffect, useState } from "react"
import AppContext from "../context/AppstateProvider"
import { Moon, MoonSun, Sun } from "../assets/SVGComponents"

function ThemeSwitcher() {
    const [color, setColor] = useState<string>('#57534e')
    const { currentTheme, setThemeState } = useContext(AppContext)

    useEffect(() => {

        if (!document) return

        if (currentTheme === 'system') {
            const userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

            setColor(userTheme ? '#FFE5CD' : 'black')
        } else if (currentTheme === 'dark') {
            setColor('#FFE5CD')
        } else {
            setColor('black')
        }

    }, [currentTheme])

    return (
        <button
            onClick={setThemeState}
        >
            {currentTheme === 'light' && <Sun {...{ color }} />}
            {currentTheme === 'dark' && <Moon />}
            {currentTheme === 'system' && <MoonSun {...{ color }} />}
        </button>
    )
}

export default ThemeSwitcher