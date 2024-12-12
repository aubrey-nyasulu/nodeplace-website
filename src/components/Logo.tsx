import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '@/public/hero/nodeplace logo - white2.png'
import { usePathname } from 'next/navigation'

function Logo({ headerIsVisible }: { headerIsVisible: boolean }) {
    const path = usePathname()

    const invert = path === '/' && !headerIsVisible || path === '/documentation' || path === '/guide'

    return (
        <Link
            href="/"
            // className="pt-1"
            className="pt-1 flex gap-1 items-center"
        // className="flex gap-1 md:gap-2 items-center"
        >
            <div
                className={`w-16 h-fit overflow-hidden ${invert && 'invert dark:invert-0'} `}
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
                <p className={`text-xl font-medium text-white ${invert && 'invert dark:invert-0'} `}>NodePlace</p>
            </div>
        </Link>
    )
}

export default Logo