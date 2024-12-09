import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '@/public/hero/nodeplace logo - white2.png'
import { usePathname } from 'next/navigation'

function Logo({ headerIsVisible }: { headerIsVisible: boolean }) {
    const path = usePathname()

    const invert = path === '/' && !headerIsVisible || path === '/documentation'

    return (
        <Link
            href="/"
        // className="flex gap-1 md:gap-2 items-center"
        >
            {/* <div className="dark:bg-white/10 backdrop-blur-lg p-1 grid place-content-center aspect-square rounded-full"> */}
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
            {/* <div className="">
              <p className="font-bold text-white">NodePlace</p>
            </div> */}
        </Link>
    )
}

export default Logo