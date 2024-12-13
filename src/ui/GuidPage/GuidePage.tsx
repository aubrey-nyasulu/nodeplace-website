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
                <div className="flex gap-2 items-center">
                    <Info />
                </div>
                <p>This documentation is still ongoing</p>
            </Note>
            <NodePlaceSection />
            <RoutingSection />
            <MiddlewareSection />
            <ErrorHandleringSection />
        </section>
    )
}

export default GuidePage