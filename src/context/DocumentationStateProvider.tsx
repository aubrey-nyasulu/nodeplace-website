'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

type PageState = {
    currentSection: {
        route: string,
        id: string
    }
    setCurrentSection: Dispatch<SetStateAction<{
        route: string,
        id: string
    }>>
}

const DocumentationContext = createContext<PageState>({
    currentSection: { route: '', id: '' },
    setCurrentSection: () => { }
})

export function DocumentationContextProvider({ children }: { children: ReactNode }) {
    const [currentSection, setCurrentSection] = useState({ route: 'nodeplace-route', id: '' })

    return (
        <DocumentationContext.Provider value={{
            currentSection,
            setCurrentSection
        }}>
            {children}
        </DocumentationContext.Provider>
    )
}

export default DocumentationContext