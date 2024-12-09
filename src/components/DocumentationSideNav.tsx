'use client'

import { useContext } from "react"
import DocumentationContext from "../context/DocumentationStateProvider"
import { twMerge } from "tailwind-merge"
import { documentationLinks } from "../lib/constants"
import LiElement from "./LiElement"

function DocumentationSideNav() {
    const { currentSection, setCurrentSection } = useContext(DocumentationContext)

    return (
        <aside className="w-96 border-r border-r-[#aaa2] dark:border-r-[#212121] relative hidden md:block pt-24">
            <ul className="sticky top-0 space-y-2 pr-2">
                <li
                    onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'nodeplace-route' }))}
                    className={`w-full h-fit`}
                >
                    <a
                        href="#nodeplace-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'nodeplace-route' && 'bg-primary text-white')}
                    >nodeplace()</a>
                    <ul className={`px-6 pt-2 ${currentSection.route === 'nodeplace-route' ? 'block' : 'hidden'} `}>
                        {
                            documentationLinks.nodeplace.map((meta, index) => (
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
                    className="w-full h-fit"
                >
                    <a
                        href="#application-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'application-route' && 'bg-primary text-white')}
                    >Application</a>
                    <ul className={`px-6 pt-2 ${currentSection.route === 'application-route' ? 'block' : 'hidden'} `}>
                        {
                            documentationLinks.application.map((meta, index) => (
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
                    className="w-full h-fit"
                >
                    <a
                        href="#request-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'request-route' && 'bg-primary text-white')}
                    >request</a>
                    <ul className={`px-6 pt-2 ${currentSection.route === 'request-route' ? 'block' : 'hidden'} `}>
                        {
                            documentationLinks.request.map((meta, index) => (
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
                    className="w-full h-fit"
                >
                    <a
                        href="#response-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'response-route' && 'bg-primary text-white')}
                    >response</a>
                    <ul className={`px-6 pt-2 ${currentSection.route === 'response-route' ? 'block' : 'hidden'} `}>
                        {
                            documentationLinks.response.map((meta, index) => (
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
                    className="w-full h-fit"
                >
                    <a
                        href="#router-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'router-route' && 'bg-primary text-white')}
                    >Router</a>
                    <ul className={`px-6 pt-2 ${currentSection.route === 'router-route' ? 'block' : 'hidden'} `}>
                        {
                            documentationLinks.router.map((meta, index) => (
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