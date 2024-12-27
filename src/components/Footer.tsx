import Year from "../components/Year";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-2 md:px-0">
            <div className="langingpage-container border-x border-x-stone-400/50 dark:border-x-stone-800 px-8 py-8 md:py-16 flex gap-8 flex-col-reverse md:flex-row items-center justify-between stroke-stone-300">
                <p>
                    NodePlace &copy; {<Year />}. All rights reserved
                </p>

                <ul className={`flex gap-8 items-center  dark:text-gray-200`}>
                    <li className={twMerge('hover:text-primary')}><Link href="/guide">📌 Guide</Link></li>
                    <li className={twMerge('hover:text-primary')}><Link href="/templates">🚀 Templates</Link></li>
                    <li className={twMerge('hover:text-primary')}><Link href="/blog">📰 Blog</Link></li>
                </ul>
            </div>
        </footer>
    )
}
