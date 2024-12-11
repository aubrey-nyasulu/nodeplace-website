import Note from "./components/Note"
import HelloWorldSection from "./sections/HelloWorldSection"
import NodePlaceSection from "./sections/NodePlaceSection"
import RoutingSection from "./sections/RoutingSection"
import MiddlewareSection from "./sections/MiddlewareSection"
import ErrorHandleringSection from "./sections/ErrorHandleringSection"

function GuidePage() {
    return (
        <section className="w-full overflow-y-scroll no-scrollbar flex flex-col gap-8 py-24">
            <h1 className="text-3xl md:text-4xl font-bold">^0.3.0 - Alpha - Release</h1>
            <Note className="bg-green-800/50">
                <p>This documentation is still ongoing</p>
            </Note>
            <NodePlaceSection />
            <HelloWorldSection />
            <RoutingSection />
            <MiddlewareSection />
            <ErrorHandleringSection />
        </section>
    )
}

export default GuidePage