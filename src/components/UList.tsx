import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

function UList({ headerIsVisible }: { headerIsVisible: boolean }) {
    const path = usePathname()

    const textColor = path === '/' && headerIsVisible
        ? 'text-gray-200'
        : 'text-gray-900'

    return (
        <ul className={`hidden md:flex gap-8 items-center ${textColor} dark:text-gray-200`}>
            <li className={twMerge('hover:text-primary', path === '/guide' && 'font-bold  text-primary dark:text-[tomato]')}><Link href="/guide">Guide</Link></li>
            <li className={twMerge('hover:text-primary', path === '/templates' && 'font-bold  text-primary dark:text-[tomato]')}><Link href="#">Templates</Link></li>
            <li className={twMerge('hover:text-primary', path === '/blog' && 'font-bold  text-primary dark:text-[tomato]')}><Link href="#">Blog</Link></li>
        </ul>
    )
}

export default UList