import { twMerge } from "tailwind-merge"

function LiElement({ meta, currentSection }: { meta: { id: string, name: string }, currentSection: { id: string, route: string } }) {
    return (
        <li className={twMerge('py-1 opacity-60', currentSection.id === meta.id && 'text-primary dark:text-orange-300 opacity-100')}><a href={`#${meta.id}`}>{meta.name}</a></li>
    )
}

export default LiElement