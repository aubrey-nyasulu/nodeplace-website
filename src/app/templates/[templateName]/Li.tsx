import { ReactNode } from "react";

export default function Li({ children }: { children: ReactNode }) {
    return (
        <li className="flex gap-3">
            <div>-</div>
            {children}
        </li>
    )
}
