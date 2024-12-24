import Note from "../../components/Note"
import NodePlaceSection from "./sections/NodePlaceSection"
import RoutingSection from "./sections/RoutingSection"
import MiddlewareSection from "./sections/MiddlewareSection"
import ErrorHandleringSection from "./sections/ErrorHandleringSection"
import { Info } from "@/src/assets/SVGComponents"

function GuidePage() {
    return (
        <section className="w-full md:w-[calc(100%_-_288px)] flex flex-col gap-8 pt-0 pb-16">
            {/* <h1 className="text-3xl md:text-4xl font-bold">^0.3.0 - Alpha - Release</h1> */}
            <Note className="bg-green-800/50">
                <div>
                    <div className="flex gap-2 pb-2 border-b border-b-stone-500/50">
                        <Info />
                        <p className="text-lg font-semibold">Note</p>
                    </div>
                    <p className="pt-3">
                        This documentation reflects the beta version of NodePlace, set to release in mid-January. The current alpha version is a pre-release, aimed at gathering feedback from the community to shape the final product and address key developer pain points.
                    </p>
                    <p className="py-2">
                        For now:
                    </p>

                    <ul className="pl-8 list-disc space-y-2 pb-4">
                        <li className="">
                            Vanilla ES Modules: Fully supported and recommended for the best experience.
                        </li>
                        <li>
                            Vanilla CommonJS Modules: Functional, but hover inferences are limited.
                        </li>
                        <li>
                            TypeScript: Limited support; full support is coming in the beta release.
                        </li>

                    </ul>

                    <p>
                        This alpha version is not intended for serious projects but to try out and explore. Your feedback is invaluable. Thank you in advance for helping us make NodePlace better for everyone!
                    </p>
                </div>
            </Note>
            <NodePlaceSection />
            <RoutingSection />
            <MiddlewareSection />
            <ErrorHandleringSection />
        </section >
    )
}

export default GuidePage