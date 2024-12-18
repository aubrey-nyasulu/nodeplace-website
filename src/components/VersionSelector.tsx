import React from 'react'
import { DoubleCaret } from '../assets/SVGComponents'

export default function VersionSelector() {
    return (
        <div className="w-full mb group/main peer">
            <button className="w-full flex items-center justify-between p-4 py-2 border border-stone-400/50 dark:border-stone-800 rounded-md ">
                <div className="">
                    <p>Alpha Version</p>
                    <small className="text-gray-600 dark:text-gray-400 text-start block">v0.3.0</small>
                </div>
                <DoubleCaret {...{ color: 'gray' }} />
            </button>
            <div>
                <div className="w-[calc(calc(100%_-_16px))] group-hover/main:flex flex-col gap-0 justify-between p-0 border border-stone-400/50 dark:border-orange-300/10 rounded-md mt-[1px] absolute z-50 bg-white/40 dark:bg-black/40 backdrop-blur-3xl hidden group/btns overflow-hidden ">
                    <button
                        disabled
                        className="w-full flex items-center justify-between p-4 py-2 hover:bg-black/10 dark:hover:bg-white/10"
                    >
                        <div className="opacity-30">
                            <p>Stable Release</p>
                            <small className="text-gray-600 dark:text-gray-400 text-start block">v1.0.0</small>
                        </div>
                    </button>
                    <button
                        disabled
                        className="w-full flex items-center justify-between p-4 py-2 hover:bg-black/10 dark:hover:bg-white/10 "
                    >
                        <div className="opacity-30">
                            <p>Beta Version</p>
                            <small className="text-gray-600 dark:text-gray-400 text-start block">v0.5.0</small>
                        </div>
                    </button>
                    <button
                        className="w-full flex items-center justify-between p-4 py-2 bg-white/20 dark:bg-white/10 group-hover/btns:bg-transparent backdrop-blur-3xl hover:bg-black/10 dark:hover:bg-white/10"
                    >
                        <div className="">
                            <p className='text-black dark:text-white'>Alpha Version</p>
                            <small className="text-gray-600 dark:text-gray-400 text-start block">v0.3.0</small>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
