'use client'

import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Copy({ content }: { content: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = (e: any) => {
        navigator.clipboard.writeText(content)

        setCopied(true)

        const timer = setTimeout(() => {
            setCopied(false)

            clearTimeout(timer)
        }, 3000);
    }

    return (
        <button
            onClick={handleCopy}
            className={twMerge('absolute top-2 right-2 bg-stone-700/30 backdrop-blur-md text-orange-300 p-1 px-3 rounded-full border border-orange-300/10 z-40', copied && 'bg-green-600/10')}><small className='block'>
                {copied ? '✔ copied' : '📋 copy'}
            </small></button>
    )
}
