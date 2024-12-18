import image1 from "@/public/main/1.jpeg"
import Image from "next/image";

function SectionThree() {
    return (
        <section className="w-full px-2">
            <div
                className="langingpage-container px-2 lg:px-0 py-8 md:py-0 flex flex-col-reverse md:flex-row gap-0 items-center border-x border-x-stone-400/50 dark:border-x-stone-800 md:border-b-0 border-b border-b-stone-400/50 dark:border-b-stone-800 "
            >
                <div className="flex-1 md:w-[50%] w-full">
                    <Image
                        src={image1}
                        alt="about nodeplace image"
                        width={2000}
                        height={2000}
                    />
                </div>

                <div className="md:w-[50%] w-full px-2 pb-4 md:px-8">
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