'use client'

import { useContext, useEffect, useState } from "react"
import DocumentationContext from "../../../context/DocumentationStateProvider"
import { twMerge } from "tailwind-merge"
import { documentationNavLinks } from "../../../lib/constants"
import LiElement from "../../../components/LiElement"
import Link from "next/link"
import VersionSelector from "@/src/components/VersionSelector"
import { Caret } from "@/src/assets/SVGComponents"

function DocumentationSideNavMobile() {
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
                        >Nodeplace:</Link>
                        <ul className={` ${currentSection.route === 'nodeplace-route' ? 'block' : 'hidden'} `}>
                            {
                                documentationNavLinks.nodeplace.map((meta, index) => (
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
                        onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'application-route' }))}
                        className={`w-full opacity-100 h-fit flex items-center gap-2`}
                    >
                        <Link
                            href="#application-route"
                            className={twMerge(' hidden', currentSection.route === 'application-route' && 'block ')}
                        >Application:</Link>
                        <ul className={` ${currentSection.route === 'application-route' ? 'block' : 'hidden'} `}>
                            {
                                documentationNavLinks.application.map((meta, index) => (
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
                        onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'request-route' }))}
                        className={`w-full opacity-100 h-fit flex items-center gap-2`}
                    >
                        <Link
                            href="#request-route"
                            className={twMerge(' hidden', currentSection.route === 'request-route' && 'block ')}
                        >request:</Link>
                        <ul className={` ${currentSection.route === 'request-route' ? 'block' : 'hidden'} `}>
                            {
                                documentationNavLinks.request.map((meta, index) => (
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
                        onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'response-route' }))}
                        className={`w-full opacity-100 h-fit flex items-center gap-2`}
                    >
                        <Link
                            href="#response-route"
                            className={twMerge(' hidden', currentSection.route === 'response-route' && 'block ')}
                        >response:</Link>
                        <ul className={` ${currentSection.route === 'response-route' ? 'block' : 'hidden'} `}>
                            {
                                documentationNavLinks.response.map((meta, index) => (
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
                        onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'router-route' }))}
                        className={`w-full opacity-100 h-fit flex items-center gap-2`}
                    >
                        <Link
                            href="#router-route"
                            className={twMerge(' hidden', currentSection.route === 'router-route' && 'block ')}
                        >Router:</Link>
                        <ul className={`${currentSection.route === 'router-route' ? 'block' : 'hidden'} `}>
                            {
                                documentationNavLinks.router.map((meta, index) => (
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
                    <ul className="sticky top-0 space-y-2 mt-5 peer-hover:blur-sm">
                        <li
                            onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'nodeplace-route' }))}
                            className={`w-full opacity-100 h-fit`}
                        >
                            <Link
                                href="#nodeplace-route"
                                className={twMerge('w-full block py-3 px-4 rounded-md hover:bg-stone-400 bg-stone-200 dark:bg-stone-800', currentSection.route === 'nodeplace-route' && 'bg-stone-800 dark:bg-orange-500/20 text-white')}
                            >nodeplace()</Link>
                            <ul className={`px-6 pt-2 ${currentSection.route === 'nodeplace-route' ? 'block' : 'hidden'} `}>
                                {
                                    documentationNavLinks.nodeplace.map((meta, index) => (
                                        <LiElement
                                            key={meta.id + index}
                                            {...{ meta, currentSection }}
                                        />
                                    ))
                                }
                            </ul>
                        </li>
                        <li
                            onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'application-route' }))}
                            className="w-full h opacity-100-fit"
                        >
                            <Link
                                href="#application-route"
                                className={twMerge('w-full block py-3 px-4 rounded-md hover:bg-stone-400 bg-stone-200 dark:bg-stone-800', currentSection.route === 'application-route' && 'bg-stone-800 dark:bg-orange-500/20 text-white')}
                            >Application</Link>
                            <ul className={`px-6 pt-2 ${currentSection.route === 'application-route' ? 'block' : 'hidden'} `}>
                                {
                                    documentationNavLinks.application.map((meta, index) => (
                                        <LiElement
                                            key={meta.id + index}
                                            {...{ meta, currentSection }}
                                        />
                                    ))
                                }
                            </ul>
                        </li>
                        <li
                            onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'request-route' }))}
                            className="w-full h opacity-100-fit"
                        >
                            <Link
                                href="#request-route"
                                className={twMerge('w-full block py-3 px-4 rounded-md hover:bg-stone-400 bg-stone-200 dark:bg-stone-800', currentSection.route === 'request-route' && 'bg-stone-800 dark:bg-orange-500/20 text-white')}
                            >request</Link>
                            <ul className={`px-6 pt-2 ${currentSection.route === 'request-route' ? 'block' : 'hidden'} `}>
                                {
                                    documentationNavLinks.request.map((meta, index) => (
                                        <LiElement
                                            key={meta.id + index}
                                            {...{ meta, currentSection }}
                                        />
                                    ))
                                }
                            </ul>
                        </li>
                        <li
                            onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'response-route' }))}
                            className="w-full h opacity-100-fit"
                        >
                            <Link
                                href="#response-route"
                                className={twMerge('w-full block py-3 px-4 rounded-md hover:bg-stone-400 bg-stone-200 dark:bg-stone-800', currentSection.route === 'response-route' && 'bg-stone-800 dark:bg-orange-500/20 text-white')}
                            >response</Link>
                            <ul className={`px-6 pt-2 ${currentSection.route === 'response-route' ? 'block' : 'hidden'} `}>
                                {
                                    documentationNavLinks.response.map((meta, index) => (
                                        <LiElement
                                            key={meta.id + index}
                                            {...{ meta, currentSection }}
                                        />
                                    ))
                                }
                            </ul>
                        </li>
                        <li
                            onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'router-route' }))}
                            className="w-full h opacity-100-fit"
                        >
                            <Link
                                href="#router-route"
                                className={twMerge('w-full block py-3 px-4 rounded-md hover:bg-stone-400 bg-stone-200 dark:bg-stone-800', currentSection.route === 'router-route' && 'bg-stone-800 dark:bg-orange-500/20 text-white')}
                            >Router</Link>
                            <ul className={`px-6 pt-2 ${currentSection.route === 'router-route' ? 'block' : 'hidden'} `}>
                                {
                                    documentationNavLinks.router.map((meta, index) => (
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

export default DocumentationSideNavMobile