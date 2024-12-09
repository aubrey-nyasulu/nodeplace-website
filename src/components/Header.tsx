import Link from "next/link";
import Nav from "./Nav";

function Header() {
  return (
    <header className="relative pt-3 w-full h-screen h-svh space-y-4 bg-[#000]" >
      {/* <div className="w-full h-full absolute top-0 left-0 bg-black/50"></div> */}
      <Nav />
      <section className="relative w-full h-full  heroBg pt-16">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#f5f6fa] dark:from-[#100a06] to-transparent"></div>
        <div className="langingpage-container px-4 lg:px-0 h-full flex flex-col items-center  justify-center">
          {/* <p className="font-bold text-white text-[40px] md:text-[64px]">NodePlace</p> */}
          <div className="w-fit md:max-w-[800px] md:text-center mt-1">
            <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.10]">Build Scalable and Flexible Applications Fast</h1>
            <p className="text-xl pt-4">Unlock a flexible, developer-friendly framework designed to simplify your API and microservice development.</p>
          </div>
          <div className="flex w-full gap-4 justify-start md:justify-center mt-8 overflow-auto">
            <Link
              href="/documentation"
              className="btn-primary"
            >
              Get Started
              {/* <button className="btn-primary">Get started</button> */}
            </Link>
            <Link
              href="https://github.com/aubrey-nyasulu/nodeplace"
              target="_blank"
              className="btn-secondary"
            >
              <span className="text-orange-600">Star Us</span> on Github
              {/* <button className="btn-secondary">
                <span className="text-orange-600">Star Us</span> on Github
              </button> */}
            </Link>
          </div>
        </div>
      </section>
    </header >
  )
}

export default Header