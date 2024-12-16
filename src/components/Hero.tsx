import Link from "next/link";
import heroImg from '@/public/hero/hero2.jpg'
import Image from "next/image";

function Hero() {
  return (
    <section className="relative w-full h-fit overflow-hidden  z-40 px-2">
      <div className="langingpage-container px-4 lg:px-0 h-full flex flex-col items-start justify-center border-x border-x-stone-800 pt-40 pb-16">
        {/* <p className="font-bold text-white text-[40px] md:text-[64px]">NodePlace</p> */}
        {/* <div className="w-full h-full absolute top-0 left-0 opacity-50">
          <Image
            src={heroImg}
            alt="hero background image"
            width={2000}
            height={2000}
            placeholder="blur"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-[#f5f6fa] dark:from-[#100a06] to-transparent"></div> */}

        <div className="w-full md:max-w-[900px] text-center md:text-left mt-1 z-40 md:ml-8">
          <h1 className=" text-[40px] md:text-[64px] font-bold leading-[1.10] pb-1 md:pb-4 text-orange-300">Where all edges connect</h1>
          <p className="text-xl pt-4 max-w-[600px]  pb-8">Unlock a flexible, developer-friendly framework designed to simplify your API and microservice development.</p>

          <div className="flex w-full md:w-fit justify-center md:justify-start gap-4 mt-8">
            <Link
              href="/guide"
              className="btn-primary w-full whitespace-nowrap"
            >
              Get Started
            </Link>

            {/* <Link
              href="https://github.com/aubrey-nyasulu/nodeplace"
              target="_blank"
              className="btn-secondary whitespace-nowrap"
            >
              <span className="text-orange-600">Star Us</span> on Github
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero