import { Airoplane, DynamicRoute, Fire } from "@/src/assets/SVGComponents";

function SectionSix() {
    return (
        <section className="w-screen h-fit p-0 m-0 border-y border-y-stone-400/50 dark:border-y-stone-800 px-2">
            <div className="langingpage-container py-16">
                <h2 className="text-2xl md:text-4xl font-bold text-center max-w-[800px] pb-4 md:pb-8">Start Developing as soon as you install</h2>
                <div className="grid gap-8 md:gap-16 md:grid-cols-2 mt-8 ">
                    <div className="p-4 space-y-2 border border-stone-400/50 dark:border-stone-800 rounded-md">
                        <div className="grid place-content-center aspect-square w-20 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500">
                            <DynamicRoute />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold pb-2">Intergrated Development</h3>
                            <p>NodePlace simplifies your workflow with built-in type definitions and inline IDE documentation. Just install and start coding, no extra setup required.</p>
                        </div>
                    </div>

                    <div className="p-4 space-y-2 border border-stone-400/50 dark:border-stone-800 rounded-md">
                        <div className="grid place-content-center aspect-square w-20 rounded-lg bg-gradient-to-br from-orange-600 to-orange-600">
                            <Fire />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold pb-2">Zero External Dependencies</h3>
                            <p>Upgrade effortlessly, no compatibility headaches, just focus on building your server applications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSix