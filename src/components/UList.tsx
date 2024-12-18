import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

function UList() {
    const path = usePathname()


    return (
        <ul className={`hidden md:flex gap-8 items-center `}>
            <li className={twMerge('hover:text-primary', path === '/guide' && 'font-bold  text-primary dark:text-orange-300')}><Link href="/guide">📌 Guide</Link></li>
            <li className={twMerge('hover:text-primary', path === '/templates' && 'font-bold  text-primary dark:text-orange-300')}><Link href="/templates">🚀 Templates</Link></li>
            <li className={twMerge('hover:text-primary', path === '/blog' && 'font-bold  text-primary dark:text-orange-300')}><Link href="/blog">📰 Blog</Link></li>
        </ul>
    )
}

export default UList