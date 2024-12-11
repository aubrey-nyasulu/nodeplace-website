'use client'

import { useContext } from "react"
import DocumentationContext from "../../../context/DocumentationStateProvider"
import { twMerge } from "tailwind-merge"
import { GuideNavLinks } from "../../../lib/constants"
import LiElement from "../../../components/LiElement"
import { DoubleCaret } from "../../../assets/SVGComponents"

function GuideSideNav() {
    const { currentSection, setCurrentSection } = useContext(DocumentationContext)

    return (
        <aside className="w-96 h-screen overflow-y-auto border-r border-r-[#2a2a2a22] dark:border-r-[#212121] relative hidden md:block pt-24 pr-2">
            <div className="w-full mb-5 group/main">
                <button className="w-full flex items-center justify-between p-4 py-2 border-2 border-[#2a2a2a22] dark:border-[#212121] rounded-md ">
                    <div className="">
                        <p>Alpha Version</p>
                        <small className="text-gray-600 dark:text-gray-400 text-start block">v0.3.0</small>
                    </div>
                    <DoubleCaret {...{ color: 'gray' }} />
                </button>
                <div>
                    <div className="w-[calc(calc(100%_-_8px))] group-hover/main:flex flex-col gap-0 justify-between p-0 border-2 border-[#2a2a2a22] dark:border-[#212121] rounded-md mt-[1px] absolute z-50 bg-[#f5f6fa] dark:bg-[#100a06] hidden group/btns ">
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
                    >nodeplace</a>
                    {/* <ul className={`px-6 pt-2 ${currentSection.route === 'nodeplace-route' ? 'block' : 'hidden'} `}>
                        {
                            GuideNavLinks.nodeplace.map((meta, index) => (
                                <LiElement
                                    key={meta.id + index}
                                    {...{ meta, currentSection }}
                                />
                            ))
                        }
                    </ul> */}
                </li>
                <li
                    onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'hello-world-route' }))}
                    className="w-full h-fit"
                >
                    <a
                        href="#hello-world-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'hello-world-route' && 'bg-primary text-white')}
                    >Hello World</a>
                    {/* <ul className={`px-6 pt-2 ${currentSection.route === 'application-route' ? 'block' : 'hidden'} `}>
                        {
                            GuideNavLinks["Hello World"].map((meta, index) => (
                                <LiElement
                                    key={meta.id + index}
                                    {...{ meta, currentSection }}
                                />
                            ))
                        }
                    </ul> */}
                </li>
                <li
                    onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'routing-route' }))}
                    className="w-full h-fit"
                >
                    <a
                        href="#routing-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'routing-route' && 'bg-primary text-white')}
                    >Routing</a>
                    {/* <ul className={`px-6 pt-2 ${currentSection.route === 'request-route' ? 'block' : 'hidden'} `}>
                        {
                            GuideNavLinks.Routing.map((meta, index) => (
                                <LiElement
                                    key={meta.id + index}
                                    {...{ meta, currentSection }}
                                />
                            ))
                        }
                    </ul> */}
                </li>
                <li
                    onClick={() => setCurrentSection(currentState => ({ ...currentState, route: 'middleware-route' }))}
                    className="w-full h-fit"
                >
                    <a
                        href="#middleware-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'middleware-route' && 'bg-primary text-white')}
                    >Middleware</a>
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
                    <a
                        href="#error-handlering-route"
                        className={twMerge('w-full block py-3 px-4 rounded-md', currentSection.route === 'error-handlering-route' && 'bg-primary text-white')}
                    >Error Handling</a>
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