import { Airoplane, DynamicRoute, Fire } from "@/src/assets/SVGComponents";

function SectionTwo() {
    return (
        <section className="w-screen h-fit p-0 m-0 border-y border-y-stone-400/50 dark:border-y-stone-800 px-2 md:px-0">
            <div className="langingpage-container py-16">
                <h2 className="text-2xl md:text-4xl text-center md:text-start font-bold max-w-[800px] md:pb-8">Powerful Features to Supercharge Your Development</h2>
                <div className="grid gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-3 mt-8 ">
                    <div className="p-4 space-y-2 border border-stone-400/50 dark:border-stone-800 rounded-md h-fit">
                        <div className="grid place-content-center aspect-square w-20 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500">
                            <DynamicRoute />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold pb-2">Dynamic Routing</h3>
                            <p>Define routes effortlessly with built-in dynamic capabilities.</p>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 border border-stone-400/50 dark:border-stone-800 rounded-md h-fit">
                        <div className="grid place-content-center aspect-square w-20 rounded-lg bg-gradient-to-br from-orange-600 to-orange-600">
                            <Fire />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold pb-2">Lightweight Middleware System</h3>
                            <p>Integrate middleware seamlessly without unnecessary complexity.</p>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 border border-stone-400/50 dark:border-stone-800 rounded-md h-fit">
                        <div className="grid place-content-center aspect-square w-20 rounded-lg bg-gradient-to-br from-purple-500 to-blue-700">
                            <Airoplane />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold pb-2">Performance Optimization</h3>
                            <p>Engineered for speed and scalability, perfect for demanding aplications.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo