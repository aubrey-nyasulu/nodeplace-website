import { Info } from "@/src/assets/SVGComponents"
import Note from "../../components/Note"
import ApplicationSection from "./sections/ApplicationSection"
import NodePlaceSection from "./sections/NodePlaceSection"
import RequestSection from "./sections/RequestSection"
import ResponseSection from "./sections/ResponseSection"
import RouterSection from "./sections/RouterSection"

function DocumentationPage() {
    return (
        <section className="w-full md:w-[calc(100%_-_288px)] flex flex-col gap-8 py-0">
            {/* <h1 className="text-3xl md:text-4xl font-bold">^0.3.0 - Alpha - Release</h1> */}
            <Note className="bg-green-800/50">
                <div className="flex gap-2 items-center">
                    <Info />
                </div>
                <p>This documentation is still ongoing</p>
            </Note>
            <NodePlaceSection />
            <ApplicationSection />
            <RequestSection />
            <ResponseSection />
            <RouterSection />
        </section>
    )
}

export default DocumentationPage