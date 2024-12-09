import { usePathname } from "next/navigation"
import { Menu } from "../assets/SVGComponents"
import { useEffect, useState } from "react"

function MenuComponent({ headerIsVisible }: { headerIsVisible: boolean }) {
    const [currentTheme, setCurrentTheme] = useState('')
    const [color, setColor] = useState('black')

    const path = usePathname()

    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light'
        setCurrentTheme(theme)

        if (path === '/') {
            if (currentTheme !== 'dark') {
                setColor(headerIsVisible ? 'white' : 'black')
            }
        }
    }, [currentTheme, headerIsVisible])

    return (
        <>
            {currentTheme === 'light' && <Menu {...{ color: color }} />}
            {currentTheme === 'dark' && <Menu />}
            {currentTheme === '' && <Menu {...{ color: color }} />}
        </>
    )
}

export default MenuComponent