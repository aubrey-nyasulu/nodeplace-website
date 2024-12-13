import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '@/public/hero/nodeplace logo - white2.png'
import { usePathname } from 'next/navigation'

function Logo({ headerIsVisible }: { headerIsVisible: boolean }) {
    const path = usePathname()

    const invert = path === '/' && !headerIsVisible || path === '/documentation' || path === '/guide' || path === '/blog'

    return (
        <Link
            href="/"
            className="pt-1"
        // className="pt-1 flex gap-1 items-center"
        // className="flex gap-1 md:gap-2 items-center"
        >
            <div
                className={`w-16 h-fit overflow-hidden ${invert && 'invert dark:invert-0'} opacity-80 `}
            >
                <Image
                    src={logo}
                    alt="nodeplace logo"
                    width={2000}
                    height={2000}
                />
            </div>
            {/* </div> */}
            <div className="">
                <p className={`text-xs font-medium `}>NodePlace</p>
            </div>
        </Link>
    )
}

export default Logo