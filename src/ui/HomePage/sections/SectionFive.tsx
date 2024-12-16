import image3 from "@/public/main/3.jpeg"
import Image from "next/image";

function SectionFive() {
    return (
        <section className="w-full px-2">
            <div
                className="langingpage-container px-2 lg:px-0 py-8 md:py-0 flex flex-col-reverse md:flex-row gap-0 items-center border-x border-x-stone-800"
            >
                <div className="flex-1 md:w-[50%] w-full">
                    <Image
                        src={image3}
                        alt="about nodeplace image"
                        width={2000}
                        height={2000}
                    />
                </div>

                <div className="md:w-[50%] w-full px-2 pb-4 md:px-8">
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