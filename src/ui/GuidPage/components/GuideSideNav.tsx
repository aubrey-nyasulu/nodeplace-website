'use client'

import { useContext } from "react"
import DocumentationContext from "../../../context/DocumentationStateProvider"
import { twMerge } from "tailwind-merge"
import { GuideNavLinks } from "../../../lib/constants"
import LiElement from "../../../components/LiElement"
import { DoubleCaret } from "../../../assets/SVGComponents"
import Link from "next/link"
import VersionSelector from "@/src/components/VersionSelector"

function GuideSideNav() {
    const { currentSection, setCurrentSection } = useContext(DocumentationContext)

    return (
        <aside className="fixed top-[0px] w-72 h-screen overflow-y-auto border-r border-r-stone-300 dark:border-stone-800 hidden md:block pt-[100px] px-2">
            <VersionSelector />
            <ul className="sticky top-0 space-y-2 mt-5">
                <li
                    onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'nodeplace-route' }))}
                    className={`w-full h-fit`}
                >
                    <Link
                        href="#nodeplace-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md bg-stone-300 dark:bg-stone-800', currentSection.route === 'nodeplace-route' && 'bg-primary dark:bg-orange-300/30 text-white')}
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
                        className={twMerge('w-full block py-3 px-4 rounded-md bg-stone-300 dark:bg-stone-800', currentSection.route === 'routing-route' && 'bg-primary dark:bg-orange-300/30 text-white')}
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
                        className={twMerge('w-full block py-3 px-4 rounded-md bg-stone-300 dark:bg-stone-800', currentSection.route === 'middleware-route' && 'bg-primary dark:bg-orange-300/30 text-white')}
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
                    className="w-full h-fit"
                >
                    <Link
                        href="#error-handlering-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md bg-stone-300 dark:bg-stone-800', currentSection.route === 'error-handlering-route' && 'bg-primary dark:bg-orange-300/30 text-white')}
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
            </ul>
        </aside>
    )
}

export default GuideSideNav