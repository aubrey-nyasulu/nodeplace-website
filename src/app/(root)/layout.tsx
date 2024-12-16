import Nav from "@/src/components/Nav";
import Year from "@/src/components/Year";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function MDXLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <header className="relative top-0 pt-0 w-full" >
        <Nav />
      </header>
      {children}
      <footer className="w-full px-2 md:px-0">
        <div className="langingpage-container border-x border-x-stone-800 px-8 py-8 md:py-16 flex gap-8 flex-col-reverse md:flex-row items-center justify-between">
          <p>
            NodePlace &copy; {<Year />}. All rights reserved
          </p>

          <ul className={`flex gap-8 items-center  dark:text-gray-200`}>
            <li className={twMerge('hover:text-primary')}><Link href="/guide">📌 Guide</Link></li>
            <li className={twMerge('hover:text-primary')}><Link href="#">🚀 Templates</Link></li>
            <li className={twMerge('hover:text-primary')}><Link href="/blog">📰 Blog</Link></li>
          </ul>
        </div>
      </footer>
    </>
  );
}