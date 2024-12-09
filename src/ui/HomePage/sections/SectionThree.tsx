import image1 from "@/public/main/1.avif"
import Image from "next/image";

function SectionThree() {
    return (
        <section>
            <div
                className="langingpage-container px-4 lg:px-0 flex flex-col-reverse md:flex-row gap-8 items-center"
            >
                <div className="flex-1">
                    <Image
                        src={image1}
                        alt="about nodeplace image"
                        width={2000}
                        height={2000}
                    />
                </div>

                <div className="flex-1">
                    <h2 className="text-3xl font-bold ">APIs for Mobile Apps</h2>
                    <p className="pt-4 ">
                        Power your mobile applications with fast and reliable APIs.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SectionThree