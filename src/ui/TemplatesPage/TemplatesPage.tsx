import Image from "next/image"
import apiImage from '@/public/templates/1.jpeg'
import { NewWindow } from "@/src/assets/SVGComponents"
import Link from "next/link"

function TemplatesPage() {
    return (
        <>
            <button className="btn-secondary fixed bottom-4 right-4 z-40">Submit Template</button>

            <div className="w-full flex gap-4 md:gap-16 md:items-center flex-col md:flex-row">
                <h1 className="text-3xl font-bold">#Templates</h1>

                <form action="">
                    <input
                        type="text"
                        placeholder="Search Templates"
                        className="w-full bg-transparent px-4 py-3 rounded-md border border-stone-400/50 dark:border-stone-800 outline-none"
                    />

                </form>
            </div>

            <section className="w-full h-full relative mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="h-fit p-1 border border-stone-400/50 dark:border-stone-800 rounded-md">
                    <Link
                        href='/templates/API-CRUD'
                        className="block aspect-[3/2] overflow-hidden rounded-md"
                    >
                        <Image
                            src={apiImage}
                            alt="api image"
                            width={2000}
                            height={2000}
                            placeholder="blur"
                        />
                    </Link>

                    <div className="flex gap-4 items-center justify-between px-2 pb-1 pt-3">
                        <Link
                            href='/templates/API-CRUD'
                            className="w-full"
                        >
                            <p className="font-bold">nodeplace-crud-mongodb</p>
                        </Link>
                        <Link
                            href="#"
                            className="invert dark:invert-0 opacity-70"
                        >
                            <NewWindow />
                        </Link>
                    </div>
                    <Link
                        href='/templates/API-CRUD'
                    >
                        <p className="pl-2 opacity-70">A simple REST API with CRUD operations.</p>
                        <small className="p-2 pt-4 block opacity-40">By NodePlace</small>
                    </Link>
                </div>

            </section>
        </>
    )
}

export default TemplatesPage