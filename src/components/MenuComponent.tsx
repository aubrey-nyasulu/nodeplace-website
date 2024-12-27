import { Menu } from "../assets/SVGComponents"
import { useContext, useEffect, useState } from "react"
import AppContext from "../context/AppstateProvider"

function MenuComponent() {
    const { currentTheme, isMenuOpen, setMenuState } = useContext(AppContext)

    return (
        <button
            className="P-0 "
            onClick={() => setMenuState(!isMenuOpen)}
        >
            {currentTheme === 'light' && <Menu {...{ color: 'black' }} />}
            {currentTheme === 'dark' && <Menu {...{ color: '#FFE5CD' }} />}
            {currentTheme === 'system' && <Menu {...{ color: 'black' }} />}
        </button>
    )
}

export default MenuComponent