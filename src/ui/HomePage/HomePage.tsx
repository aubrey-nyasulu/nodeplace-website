import Hero from "@/src/components/Hero";
import SectionFive from "./sections/SectionFive";
import SectionFour from "./sections/SectionFour";
import SectionOne from "./sections/SectionOne";
import SectionThree from "./sections/SectionThree";
import SectionTwo from "./sections/SectionTwo";

export default function HomePage() {
    return (
        <main className="w-full min-h-screen pt-16 space-y-24 md:space-y-36">
            <Hero />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </main>
    )
}
