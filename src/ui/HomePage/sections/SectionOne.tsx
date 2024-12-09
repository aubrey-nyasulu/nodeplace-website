import image1 from "@/public/hero/7.jpeg"
import Image from "next/image";

function SectionOne() {
    return (
        <section>
            <div
                className="langingpage-container px-4 lg:px-0 flex flex-col md:flex-row gap-8 md:items-center"
            >
                <div className="w-[200px] md:w-[540px] h-fit rounded-lg overflow-hidden">
                    <Image
                        src={image1}
                        alt="about nodeplace image"
                        width={2000}
                        height={2000}
                    />
                </div>

                <div className="w-full">
                    <h2 className="text-3xl md:text-[48px] font-bold leading-[1.10]">Build robust server applications, the Node.js way.</h2>
                    <p className="pt-4">
                        Nodeplace is a lightweight and intuitive Node.js framework designed for building fast and scalable server applications. Inspired by Express.js, it provides all the power of a robust framework with a refined focus on API development. Whether you are creating APIs, microservices, or server-driven applications, Nodeplace ensures a smooth development experience.

                    </p>

                </div>
            </div>
        </section>
    )
}

export default SectionOne