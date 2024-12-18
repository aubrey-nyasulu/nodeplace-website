import image2 from "@/public/main/2.jpeg"
import Image from "next/image";

function SectionFour() {
    return (
        <section className="w-full px-2">
            <div
                className="langingpage-container px-2 lg:px-0 py-8 md:py-0 flex flex-col md:flex-row gap-0 items-center border-x border-x-stone-400/50 dark:border-x-stone-800 md:border-b-0 border-b border-b-stone-400/50 dark:border-b-stone-800 "
            >
                <div className="md:w-[50%] w-full px-2 pb-4 md:px-8">
                    <h2 className="text-3xl font-bold ">IoT Applications</h2>
                    <p className="pt-4 ">
                        Create scalable backend solutions for modern web platforms.
                    </p>
                </div>

                <div className="flex-1 md:w-[50%] w-full">
                    <Image
                        src={image2}
                        alt="about nodeplace image"
                        width={2000}
                        height={2000}
                    />
                </div>
            </div>
        </section>
    )
}

export default SectionFour