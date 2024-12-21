import image1 from "@/public/hero/7.jpeg"
import Image from "next/image";

function SectionOne() {
    return (
        <section className="w-full px-2">
            <div
                className="langingpage-container flex flex-col md:flex-row gap-4 md:gap-0 items-center border border-stone-400/50 dark:border-stone-800 border-y-0 p-4 md:p-16"
            >
                <div className="w-full md:w-[540px] h-fit rounded-full overflow-hidden hidden md:block bg-stone-900 dark:bg-transparent">
                    <Image
                        src={image1}
                        alt="about nodeplace image"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="animate-pulse"
                    />
                </div>

                <div className="w-full md:max-w-[800px] text-center md:text-end">
                    <h2 className="text-2xl md:text-[48px] font-bold leading-[1.10]">Build robust server applications, the NodePlace way.</h2>
                    <p className="pt-4">
                        At the heart of Nodeplace is a lightweight and intuitive Node.js framework designed for building fast and scalable server applications. Inspired by Express.js, it provides all the power of a robust framework with a refined focus on API development. Whether you are creating APIs, microservices, or server-driven applications, Nodeplace ensures a smooth development experience.

                    </p>

                </div>
            </div>
        </section>
    )
}

export default SectionOne