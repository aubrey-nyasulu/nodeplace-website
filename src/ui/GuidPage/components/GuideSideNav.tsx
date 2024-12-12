'use client'

import { useContext } from "react"
import DocumentationContext from "../../../context/DocumentationStateProvider"
import { twMerge } from "tailwind-merge"
import { GuideNavLinks } from "../../../lib/constants"
import LiElement from "../../../components/LiElement"
import { DoubleCaret } from "../../../assets/SVGComponents"
import Link from "next/link"

function GuideSideNav() {
    const { currentSection, setCurrentSection } = useContext(DocumentationContext)

    return (
        <aside className="fixed top-[0px] w-72 h-screen overflow-y-auto border-r border-r-stone-300 dark:border-stone-800 hidden md:block pt-[100px] px-2">
            <div className="w-full mb-5 group/main">
                <button className="w-full flex items-center justify-between p-4 py-2 border border-stone-300 dark:border-stone-800 rounded-md ">
                    <div className="">
                        <p>Alpha Version</p>
                        <small className="text-gray-600 dark:text-gray-400 text-start block">v0.3.0</small>
                    </div>
                    <DoubleCaret {...{ color: 'gray' }} />
                </button>
                <div>
                    <div className="w-[calc(calc(100%_-_8px))] group-hover/main:flex flex-col gap-0 justify-between p-0 border border-stone-300 dark:border-stone-800 rounded-md mt-[1px] absolute z-50 bg-[#f5f6fa] dark:bg-[#100a06] hidden group/btns ">
                        <button
                            disabled
                            className="w-full flex items-center justify-between p-4 py-2 hover:bg-black/10 dark:hover:bg-white/10 "
                        >
                            <div className="opacity-30">
                                <p>Beta Version</p>
                                <small className="text-gray-600 dark:text-gray-400 text-start block">v0.5.0</small>
                            </div>
                            <DoubleCaret {...{ color: 'gray' }} />
                        </button>
                        <button
                            disabled
                            className="w-full flex items-center justify-between p-4 py-2 hover:bg-black/10 dark:hover:bg-white/10"
                        >
                            <div className="opacity-30">
                                <p>Stable Release</p>
                                <small className="text-gray-600 dark:text-gray-400 text-start block">v1.0.0</small>
                            </div>
                            <DoubleCaret {...{ color: 'gray' }} />
                        </button>
                        <button
                            className="w-full flex items-center justify-between p-4 py-2 bg-black/10 dark:bg-white/10 group-hover/btns:bg-transparent hover:bg-black/10 dark:hover:bg-white/10"
                        >
                            <div className="">
                                <p>Alpha Version</p>
                                <small className="text-gray-600 dark:text-gray-400 text-start block">v0.3.0</small>
                            </div>
                            <DoubleCaret {...{ color: 'gray' }} />
                        </button>
                    </div>
                </div>
            </div>
            <ul className="sticky top-0 space-y-2">
                <li
                    onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'nodeplace-route' }))}
                    className={`w-full h-fit`}
                >
                    <Link
                        href="#nodeplace-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md bg-stone-300 dark:bg-stone-800', currentSection.route === 'nodeplace-route' && 'bg-primary dark:bg-primary text-white')}
                    >nodeplace</Link>
                    <ul className={`px-6 pt-2 ${currentSection.route === 'nodeplace-route' ? 'block' : 'hidden'} `}>
                        {
                            GuideNavLinks.nodeplace.map((meta, index) => (
                                <LiElement
                                    key={meta.id + index}
                                    {...{ meta, currentSection }}
                                />
                            ))
                        }
                    </ul>
                </li>
                <li
                    onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'routing-route' }))}
                    className="w-full h-fit"
                >
                    <Link
                        href="#routing-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md bg-stone-300 dark:bg-stone-800', currentSection.route === 'routing-route' && 'bg-primary dark:bg-primary text-white')}
                    >Routing</Link>
                    <ul className={`px-6 pt-2 ${currentSection.route === 'routing-route' ? 'block' : 'hidden'} `}>
                        {
                            GuideNavLinks.Routing.map((meta, index) => (
                                <LiElement
                                    key={meta.id + index}
                                    {...{ meta, currentSection }}
                                />
                            ))
                        }
                    </ul>
                </li>
                <li
                    onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'middleware-route' }))}
                    className="w-full h-fit"
                >
                    <Link
                        href="#middleware-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md bg-stone-300 dark:bg-stone-800', currentSection.route === 'middleware-route' && 'bg-primary dark:bg-primary text-white')}
                    >Middleware</Link>
                    {/* <ul className={`px-6 pt-2 ${currentSection.route === 'response-route' ? 'block' : 'hidden'} `}>
                        {
                            GuideNavLinks.Middleware.map((meta, index) => (
                                <LiElement
                                    key={meta.id + index}
                                    {...{ meta, currentSection }}
                                />
                            ))
                        }
                    </ul> */}
                </li>
                <li
                    onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'error-handlering-route' }))}
                    className="w-full h-fit"
                >
                    <Link
                        href="#error-handlering-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md bg-stone-300 dark:bg-stone-800', currentSection.route === 'error-handlering-route' && 'bg-primary dark:bg-primary text-white')}
                    >Error Handling</Link>
                    {/* <ul className={`px-6 pt-2 ${currentSection.route === 'router-route' ? 'block' : 'hidden'} `}>
                        {
                            GuideNavLinks["Error Handling"].map((meta, index) => (
                                <LiElement
                                    key={meta.id + index}
                                    {...{ meta, currentSection }}
                                />
                            ))
                        }
                    </ul> */}
                </li>
            </ul>
        </aside>
    )
}

export default GuideSideNav