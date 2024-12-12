import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function Color({ className, children }: { children: ReactNode, className?: string }) {
    return (
        <span className={twMerge('bg-black/80 text-white px-1 pb-[2px] rounded-md', className)}>
            {children}
        </span>
    )
}

export default Color