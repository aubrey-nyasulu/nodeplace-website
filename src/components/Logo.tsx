import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

import logo from '@/public/hero/nodeplace logo - white2.png'
import AppContext from '../context/AppstateProvider'

function Logo() {
    const { isMenuOpen, setMenuState } = useContext(AppContext)

    return (
        <Link
            href="/"
            className="pt-1 opacity-100"
            onClick={() => setMenuState(false)}
        >
            <div
                className={`w-16 h-fit overflow-hidden invert dark:invert-0 opacity-80 `}
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