import Link from "next/link"
import { usePathname } from "next/navigation"

function UList({ headerIsVisible }: { headerIsVisible: boolean }) {
    const path = usePathname()

    const textColor = path === '/' && headerIsVisible
        ? 'text-gray-200'
        : 'text-gray-900'

    return (
        <ul className={`hidden md:flex gap-8 ${textColor} dark:text-gray-200`}>
            <li className="hover:text-primary"><Link href="/guide">Guide</Link></li>
            <li className="hover:text-primary"><Link href="#">Templates</Link></li>
            <li className="hover:text-primary"><Link href="#">Blog</Link></li>
        </ul>
    )
}

export default UList