'use client'

import { useContext } from "react"
import DocumentationContext from "../../../context/DocumentationStateProvider"
import { twMerge } from "tailwind-merge"
import { documentationNavLinks } from "../../../lib/constants"
import LiElement from "../../../components/LiElement"
import { DoubleCaret } from "../../../assets/SVGComponents"

function DocumentationSideNav() {
    const { currentSection, setCurrentSection } = useContext(DocumentationContext)

    return (
        <aside className="fixed top-[0px] w-72 h-screen overflow-y-auto border-r border-r-stone-300 dark:border-r-stone-800 hidden md:block pt-[108px] pr-2">
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
                    <a
                        href="#nodeplace-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'nodeplace-route' && 'bg-primary text-white')}
                    >nodeplace()</a>
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
                    className="w-full h-fit"
                >
                    <a
                        href="#application-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'application-route' && 'bg-primary text-white')}
                    >Application</a>
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
                    className="w-full h-fit"
                >
                    <a
                        href="#request-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'request-route' && 'bg-primary text-white')}
                    >request</a>
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
                    className="w-full h-fit"
                >
                    <a
                        href="#response-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'response-route' && 'bg-primary text-white')}
                    >response</a>
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
                    className="w-full h-fit"
                >
                    <a
                        href="#router-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'router-route' && 'bg-primary text-white')}
                    >Router</a>
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