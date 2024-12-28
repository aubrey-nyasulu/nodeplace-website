import Image from "next/image";
import Nav from "../components/Nav";
import f0f from "@/public/404.jpg";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <>
            <header className="relative top-0 pt-0 w-full" >
                <Nav />
            </header>
            <main className="langingpage-container w-screen h-screen grid place-content-center border border-stone-400/50 dark:border-stone-800 border-t-0">
                <div className="w-fit h-fit relative flex flex-col justify-center items-center px-4 pb-4 border border-stone-400/50 dark:border-stone-800 rounded-lg ">
                    <p className="absolute pb-2 text-lg animate-ping top-0">
                        not-found
                    </p>
                    <p className="pb-4 text-lg">
                        not-found
                    </p>
                    <div className="w-[200px] md:w-[300px] overflow-hidden rounded-lg invert dark:invert-0 ">
                        <Image
                            src={f0f}
                            alt="404 image"
                            width={2000}
                            height={2000}
                            placeholder="blur"
                        />
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}
