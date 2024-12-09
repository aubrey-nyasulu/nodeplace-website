import image2 from "@/public/main/2.avif"
import Image from "next/image";

function SectionFour() {
    return (
        <section>
            <div
                className="langingpage-container px-4 lg:px-0 flex flex-col md:flex-row gap-8 items-center"
            >
                <div className="flex-1">
                    <h2 className="text-3xl font-bold ">IoT Applications</h2>
                    <p className="pt-4 ">
                        Create scalable backend solutions for modern web platforms.
                    </p>
                </div>

                <div className="flex-1">
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