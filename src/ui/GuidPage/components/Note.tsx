import { Info } from "@/src/assets/SVGComponents"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

function Note({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={twMerge('w-full p-4 rounded-md bg-orange-500/30 dark:bg-orange-500/10')}>
            <div className="flex gap-2 items-center">
                <Info />
                <p className="font-bold">Note</p>
            </div>
            {children}
        </div>
    )
}

export default Note