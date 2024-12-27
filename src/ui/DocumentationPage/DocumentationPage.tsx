import { Info } from "@/src/assets/SVGComponents"
import Note from "../../components/Note"
import ApplicationSection from "./sections/ApplicationSection"
import NodePlaceSection from "./sections/NodePlaceSection"
import RequestSection from "./sections/RequestSection"
import ResponseSection from "./sections/ResponseSection"
import RouterSection from "./sections/RouterSection"

function DocumentationPage() {
    return (
        <section className="w-full md:w-[calc(100%_-_288px)] flex flex-col gap-8 pt-0 pb-16">
            <Note className="bg-green-800/50">
                <div>
                    <div className="flex gap-2 pb-2 border-b border-b-stone-500/50">
                        <Info />
                        <p className="text-lg font-semibold">Note</p>
                    </div>
                    <p className="pt-3">
                        This documentation reflects the beta version of NodePlace, set to release in mid-January. The current alpha version is a pre-release, aimed at gathering feedback from the community to shape the final product and address key developer pain points.
                    </p>

                    <p className="py-4">
                        Typescript support is only available in es modules. however, that does not mean that the code will break in commonjs modules, only that you will have to turn of noImplicitAny in tsConfig and also other fields that may cause the ts compiler to complain.
                    </p>

                    <p>
                        This alpha version is not intended for serious projects but to try out and explore. Your feedback is invaluable. Thank you in advance for helping make NodePlace better!
                    </p>
                </div>
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