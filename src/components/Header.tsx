import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";

import logo from '@/public/hero/nodeplace logo - white2.png'

function Header() {
  return (
    <header className="relative pt-3 w-full h-screen h-svh space-y-4 bg-[#000]" >
      {/* <div className="w-full h-full absolute top-0 left-0 bg-black/50"></div> */}
      <Nav />
      <section className="relative w-full h-full  heroBg pt-12">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#f5f6fa] dark:from-[#100a06] to-transparent"></div>
        <div className="langingpage-container px-4 lg:px-0 h-full flex flex-col items-center  justify-center">
          {/* <p className="font-bold text-white text-[40px] md:text-[64px]">NodePlace</p> */}
          <div className="w-fit md:max-w-[800px] md:text-center mt-1">
            {/* <div
              className={`w-48 h-fit overflow-hidden md:mx-auto `}
            >
              <Image
                src={logo}
                alt="nodeplace logo"
                width={2000}
                height={2000}
              />
            </div> */}
            <h1 className=" text-[40px] md:text-[64px] import logo from '@/public/hero/nodeplace logo - white2.png'px] font-bold leading-[1.10]">Where all the edges meet</h1>
            <p className=" text-xl pt-4">Unlock a flexible, developer-friendly framework designed to simplify your API and microservice development.</p>
            {/* <p className="text-xl pt-4">Unlock a flexible, developer-friendly framework designed to simplify your API and microservice development.</p> */}
            <div className="flex w-full gap-4 justify-start md:justify-center mt-8 overflow-auto">
              <Link
                href="/documentation"
                className="btn-primary whitespace-nowrap"
              >
                Get Started
                {/* <button className="btn-primary">Get started</button> */}
              </Link>
              <Link
                href="https://github.com/aubrey-nyasulu/nodeplace"
                target="_blank"
                className="btn-secondary whitespace-nowrap"
              >
                <span className="text-orange-600">Star Us</span> on Github
                {/* <button className="btn-secondary">
                <span className="text-orange-600">Star Us</span> on Github
              </button> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </header >
  )
}

export default Header