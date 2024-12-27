import Image from "next/image";
import yourLogo from '@/public/logos/your.jpg'
import companyLogo from '@/public/logos/company.jpg'
import logoLogo from '@/public/logos/logo.jpg'
import willLogo from '@/public/logos/will.jpg'
import goLogo from '@/public/logos/go.jpg'
import hereLogo from '@/public/logos/here.jpg'

export default function TrustedBySection() {
    return (
        <section className="flex gap-8 items-center w-fit py-4 md:py-8 border-y  border-y-stone-400/50 dark:border-y-stone-800 infinite-vertical-scroll hover:animate-pulse text-xl">
            <div className="w-screen w-svw flex gap-8 items-center justify-around">
                <div className="w-24 flex items-center justify-center overflow-hidden ">
                    <Image
                        src={yourLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={companyLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={logoLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={willLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={goLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={hereLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
            </div>

            <div className="w-screen w-svw flex gap-8 items-center justify-around">
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={yourLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={companyLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={logoLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={willLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={goLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
                <div className="w-24 flex items-center justify-center overflow-hidden">
                    <Image
                        src={hereLogo}
                        alt="company logo"
                        width={2000}
                        height={2000}
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
            </div>
        </section>
    )
}
