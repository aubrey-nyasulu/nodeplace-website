import { usePathname } from "next/navigation"

function UList({ headerIsVisible }: { headerIsVisible: boolean }) {
    const path = usePathname()

    const textColor = path === '/' && headerIsVisible
        ? 'text-gray-200'
        : 'text-gray-900'

    return (
        <ul className={`hidden md:flex gap-8 ${textColor} dark:text-gray-200`}>
            <li><a href="#">Guide</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
    )
}

export default UList