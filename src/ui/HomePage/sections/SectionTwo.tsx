import { Airoplane, DynamicRoute, Fire } from "@/src/assets/SVGComponents";

function SectionTwo() {
    return (
        <section className="langingpage-container px-4 lg:px-0">
            <h2 className="text-3xl md:text-[48px] font-bold leading-[1.10] max-w-[800px]">Powerful Features to Supercharge Your Development</h2>
            <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 mt-8">
                <div className="space-y-2">
                    <div className="grid place-content-center aspect-square w-20 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500">
                        <DynamicRoute />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Dynamic Routing</h3>
                        <p>Define routes effortlessly with built-in dynamic capabilities.</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="grid place-content-center aspect-square w-20 rounded-lg bg-gradient-to-br from-orange-600 to-orange-600">
                        <Fire />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Lightweight Middleware System</h3>
                        <p>Integrate middleware seamlessly without unnecessary complexity.</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="grid place-content-center aspect-square w-20 rounded-lg bg-gradient-to-br from-purple-500 to-blue-700">
                        <Airoplane />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Performance Optimization</h3>
                        <p>Engineered for speed and scalability, perfect for demanding aplications.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo