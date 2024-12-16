import Image from "next/image"
import apiImage from '@/public/templates/1.jpeg'
import { NewWindow } from "@/src/assets/SVGComponents"
import Link from "next/link"

function TemplatesPage() {
    return (
        <section className="w-full min-h-screen px-4 flex flex-col pt-0 pb-16 border-x border-x-stone-800">
            <h1 className="text-3xl font-bold">#Templates</h1>
            <button className="btn-secondary fixed bottom-4 right-4">Submit Template</button>

            <section className="w-full h-full relative mt-8 grid grid-cols-3">
                <div className="h-fit p-1 border border-stone-800 rounded-md">
                    <div className="aspect-[3/2] overflow-hidden rounded-md">
                        <Image
                            src={apiImage}
                            alt="api image"
                            width={2000}
                            height={2000}
                            placeholder="blur"
                        />
                    </div>

                    <div className="flex items-center justify-between p-2 pb-1">
                        <p className="font-bold">API-CRUD</p>
                        <Link href="#">
                            <NewWindow />
                        </Link>
                    </div>
                    <p className="pl-2">A simple REST API with CRUD operations.</p>
                    <p className="p-2 pt-4">By NodePlace</p>
                </div>

            </section>
        </section>
    )
}

export default TemplatesPage