import Hero from "@/src/components/Hero";
import SectionFive from "./sections/SectionFive";
import SectionFour from "./sections/SectionFour";
import SectionOne from "./sections/SectionOne";
import SectionThree from "./sections/SectionThree";
import SectionTwo from "./sections/SectionTwo";
import TrustedBySection from "./sections/TrustedBySection";
import SectionSix from "./sections/SectionSix";

export default function HomePage() {
    return (
        <main className="w-full min-h-screen pt-16 ">
            <Hero />
            <TrustedBySection />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </main>
    )
}
