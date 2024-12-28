import { Menu } from "../assets/SVGComponents"
import { useContext, useEffect, useState } from "react"
import AppContext from "../context/AppstateProvider"

function MenuComponent() {
    const [color, setColor] = useState<string>('#57534e')
    const { currentTheme, isMenuOpen, setMenuState } = useContext(AppContext)

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
            className="P-0 "
            onClick={() => setMenuState(!isMenuOpen)}
        >
            {currentTheme === 'light' && <Menu {...{ color }} />}
            {currentTheme === 'dark' && <Menu {...{ color }} />}
            {currentTheme === 'system' && <Menu {...{ color }} />}
        </button>
    )
}

export default MenuComponent