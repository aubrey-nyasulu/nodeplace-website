"use client"

import { useEffect, useState } from "react"

export default function Year() {
    const [year, setYear] = useState(0)

    useEffect(() => {
        const sec = new Date().getFullYear()

        setYear(sec)
    })

    return (
        <span>{year}</span>
    )
}
