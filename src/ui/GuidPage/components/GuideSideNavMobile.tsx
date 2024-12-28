'use client'

import { useContext, useEffect, useState } from "react"
import DocumentationContext from "../../../context/DocumentationStateProvider"
import { twMerge } from "tailwind-merge"
import { GuideNavLinks } from "../../../lib/constants"
import LiElement from "../../../components/LiElement"
import Link from "next/link"
import VersionSelector from "@/src/components/VersionSelector"
import { Caret } from "@/src/assets/SVGComponents"

function GuideSideNavMobile() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { currentSection, setCurrentSection } = useContext(DocumentationContext)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)

    const handleScroll = () => {
        const currentScrollY = window.scrollY
        if (currentScrollY > lastScrollY) {
            setScrollDirection('down')
        } else if (currentScrollY < lastScrollY) {
            setScrollDirection('up')
        }
        setLastScrollY(currentScrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])


    return (
        <aside className="fixed top-[66px] left-0 w-screen h-fit block md:hidden z-50  bg-white/20 dark:bg-black/20 backdrop-blur-2xl ">
            <div className={twMerge("w-full h-[60px] ", scrollDirection === 'down' && 'h-0 overflow-hidden')}>
                <VersionSelector />
            </div>
            <div className="w-full h-fit flex items-center justify-between gap-2 bg-stone-300/50  dark:bg-stone-800/50 peer-hover:blur-sm p-2 px-4">
                <ul className="flex-1 sticky top-0 ">
                    <li
                        onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'nodeplace-route' }))}
                        className={`w-full opacity-100 h-fit flex items-center gap-2`}
                    >
                        <Link
                            href="#nodeplace-route"
                            className={twMerge(' hidden', currentSection.route === 'nodeplace-route' && 'block ')}
                        >nodeplace:</Link>
                        <ul className={` ${currentSection.route === 'nodeplace-route' ? 'block' : 'hidden'} `}>
                            {
                                GuideNavLinks.nodeplace.map((meta, index) => (
                                    currentSection.id === meta.id &&
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
                        className={`w-full opacity-100 h-fit flex items-center gap-2`}
                    >
                        <Link
                            href="#routing-route"
                            className={twMerge(' hidden', currentSection.route === 'routing-route' && 'block ')}
                        >Routing:</Link>
                        <ul className={` ${currentSection.route === 'routing-route' ? 'block' : 'hidden'} `}>
                            {
                                GuideNavLinks.Routing.map((meta, index) => (
                                    currentSection.id === meta.id &&
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
                        className={`w-full opacity-100 h-fit flex items-center gap-2`}
                    >
                        <Link
                            href="#middleware-route"
                            className={twMerge(' hidden', currentSection.route === 'middleware-route' && 'block ')}
                        >Middleware:</Link>
                        <ul className={` ${currentSection.route === 'middleware-route' ? 'block' : 'hidden'} `}>
                            {
                                GuideNavLinks.Middleware.map((meta, index) => (
                                    currentSection.id === meta.id &&
                                    <LiElement
                                        key={meta.id + index}
                                        {...{ meta, currentSection }}
                                    />
                                ))
                            }
                        </ul>
                    </li>
                    <li
                        onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'error-handlering-route' }))}
                        className={`w-full opacity-100 h-fit flex items-center gap-2`}
                    >
                        <Link
                            href="#error-handlering-route"
                            className={twMerge(' hidden', currentSection.route === 'error-handlering-route' && 'block ')}
                        >Error Handling:</Link>
                        <ul className={` ${currentSection.route === 'error-handlering-route' ? 'block' : 'hidden'} `}>
                            {
                                GuideNavLinks["Error Handling"].map((meta, index) => (
                                    currentSection.id === meta.id &&
                                    <LiElement
                                        key={meta.id + index}
                                        {...{ meta, currentSection }}
                                    />
                                ))
                            }
                        </ul>
                    </li>

                    <li
                        onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'miscellenious-route' }))}
                        className={`w-full opacity-100 h-fit flex items-center gap-2`}
                    >
                        <Link
                            href="#miscellaneous-route"
                            className={twMerge(' hidden', currentSection.route === 'miscellaneous-route' && 'block ')}
                        >Miscellaneous:</Link>
                        <ul className={`${currentSection.route === 'miscellaneous-route' ? 'block' : 'hidden'} `}>
                            {
                                GuideNavLinks["Miscellaneous"].map((meta, index) => (
                                    currentSection.id === meta.id &&
                                    <LiElement
                                        key={meta.id + index}
                                        {...{ meta, currentSection }}
                                    />
                                ))
                            }
                        </ul>
                    </li>
                </ul>

                <button
                    onClick={() => setMenuOpen(prevState => !prevState)}
                    className="font-semibold flex gap-1 items-center"
                >
                    menu
                    <div className={twMerge(menuOpen ? "rotate-90" : "rotate-0")}>
                        <Caret {...{ color: 'gray' }} />
                    </div>
                </button>
            </div>

            {
                menuOpen &&
                <div className="w-screen px-4 min-h-screen">
                    <ul
                        className="sticky top-0 space-y-2 mt-5 peer-hover:blur-sm"
                    >
                        <li
                            onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'nodeplace-route' }))}
                            className={`w-full opacity-100 h-fit`}
                        >
                            <Link
                                href="#nodeplace-route"
                                className={twMerge('w-full block py-3 px-4 rounded-md hover:bg-stone-400 bg-stone-200 dark:bg-stone-800', currentSection.route === 'nodeplace-route' && 'bg-stone-800 dark:bg-orange-500/20 text-white')}
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
                            className="w-full opacity-100 h-fit"
                        >
                            <Link
                                href="#routing-route"
                                className={twMerge('w-full block py-3 px-4 rounded-md hover:bg-stone-400 bg-stone-200 dark:bg-stone-800', currentSection.route === 'routing-route' && 'bg-stone-800 dark:bg-orange-500/20 text-white')}
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
                            className="w-full opacity-100 h-fit"
                        >
                            <Link
                                href="#middleware-route"
                                className={twMerge('w-full block py-3 px-4 rounded-md hover:bg-stone-400 bg-stone-200 dark:bg-stone-800', currentSection.route === 'middleware-route' && 'bg-stone-800 dark:bg-orange-500/20 text-white')}
                            >Middleware</Link>
                            <ul className={`px-6 pt-2 ${currentSection.route === 'middleware-route' ? 'block' : 'hidden'} `}>
                                {
                                    GuideNavLinks.Middleware.map((meta, index) => (
                                        <LiElement
                                            key={meta.id + index}
                                            {...{ meta, currentSection }}
                                        />
                                    ))
                                }
                            </ul>
                        </li>

                        <li
                            onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'error-handlering-route' }))}
                            className="w-full opacity-100 h-fit"
                        >
                            <Link
                                href="#error-handlering-route"
                                className={twMerge('w-full block py-3 px-4 rounded-md hover:bg-stone-400 bg-stone-200 dark:bg-stone-800', currentSection.route === 'error-handlering-route' && 'bg-stone-800 dark:bg-orange-500/20 text-white')}
                            >Error Handling</Link>
                            <ul className={`px-6 pt-2 ${currentSection.route === 'error-handlering-route' ? 'block' : 'hidden'} `}>
                                {
                                    GuideNavLinks["Error Handling"].map((meta, index) => (
                                        <LiElement
                                            key={meta.id + index}
                                            {...{ meta, currentSection }}
                                        />
                                    ))
                                }
                            </ul>
                        </li>

                        <li
                            onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'miscellenious-route' }))}
                            className="w-full opacity-100 h-fit"
                        >
                            <Link
                                href="#miscellaneous-route"
                                className={twMerge('w-full block py-3 px-4 rounded-md hover:bg-stone-400 bg-stone-200 dark:bg-stone-800', currentSection.route === 'miscellaneous-route' && 'bg-stone-800 dark:bg-orange-500/20 text-white')}
                            >Miscellaneous</Link>
                            <ul className={`px-6 pt-2 ${currentSection.route === 'miscellaneous-route' ? 'block' : 'hidden'} `}>
                                {
                                    GuideNavLinks["Miscellaneous"].map((meta, index) => (
                                        <LiElement
                                            key={meta.id + index}
                                            {...{ meta, currentSection }}
                                        />
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            }
        </aside>
    )
}

export default GuideSideNavMobile