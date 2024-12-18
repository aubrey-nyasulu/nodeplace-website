"ue client"

import { useContext } from "react"
import AppContext from "../context/AppstateProvider"
import { Moon, MoonSun, Sun } from "../assets/SVGComponents"

function ThemeSwitcher() {

    const { currentTheme, setThemeState } = useContext(AppContext)

    return (
        <button
            onClick={setThemeState}
        >
            {currentTheme === 'light' && <Sun {...{ color: '#57534e' }} />}
            {currentTheme === 'dark' && <Moon />}
            {currentTheme === 'system' && <MoonSun {...{ color: '#57534e' }} />}
        </button>
    )
}

export default ThemeSwitcher