import ApplicationSection from "./sections/ApplicationSection"
import NodePlaceSection from "./sections/NodePlaceSection"
import RequestSection from "./sections/RequestSection"

function DocumentationPage() {
    return (
        <section className="w-full overflow-y-scroll no-scrollbar flex flex-col gap-8 py-24">
            <NodePlaceSection />
            <ApplicationSection />
            <RequestSection />
        </section >
    )
}

export default DocumentationPage