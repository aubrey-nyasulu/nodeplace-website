'use client'

import DocumentationContext from "@/src/context/DocumentationStateProvider";
import { ReactNode, useContext, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer";

function Section({ id, isRoute = false, className, children }: { id: string, isRoute?: boolean, children: ReactNode, className?: string }) {
    const [pageHeight, setPageHeight] = useState(0)

    useEffect(() => {
        if (!window) return

        setPageHeight(window.innerHeight)
    }, [])

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: `-300px 0px -${pageHeight + (pageHeight / 2)}px 0px`
    });

    const { setCurrentSection } = useContext(DocumentationContext)
    useEffect(() => {
        if (inView) {
            if (isRoute) {
                setCurrentSection(currentState => ({ ...currentState, route: id }))
            } else {
                setCurrentSection(currentState => ({ ...currentState, id }))
            }
        }
    }, [inView])

    return (
        <section
            id={id}
            className={`w-full -mt-[120px] pt-[120px] ${className}`}
            ref={ref}
        >
            {children}
        </section>
    )
}

export default Section