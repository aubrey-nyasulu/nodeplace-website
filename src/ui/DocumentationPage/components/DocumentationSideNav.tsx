'use client'

import { useContext } from "react"
import DocumentationContext from "../../../context/DocumentationStateProvider"
import { twMerge } from "tailwind-merge"
import { documentationNavLinks } from "../../../lib/constants"
import LiElement from "../../../components/LiElement"
import { DoubleCaret } from "../../../assets/SVGComponents"
import Link from "next/link"
import VersionSelector from "@/src/components/VersionSelector"

function DocumentationSideNav() {
    const { currentSection, setCurrentSection } = useContext(DocumentationContext)

    return (
        <aside className="fixed top-[0px] w-72 h-screen overflow-y-auto border-r border-r-stone-400/50 dark:border-r-stone-800 hidden md:block pt-[100px] px-2 pb-8">
            <VersionSelector />
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
        </aside>
    )
}

export default DocumentationSideNav