import image3 from "@/public/main/3.avif"
import Image from "next/image";

function SectionFive() {
    return (
        <section>
            <div
                className="langingpage-container px-4 lg:px-0 flex flex-col-reverse md:flex-row gap-8 items-center"
            >
                <div className="flex-1">
                    <Image
                        src={image3}
                        alt="about nodeplace image"
                        width={2000}
                        height={2000}
                    />
                </div>

                <div className="flex-1">
                    <h2 className="text-3xl font-bold ">Microservices</h2>
                    <p className="pt-4 ">
                        Streamline your microservice architecture with built-in tools for integration
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SectionFive