import Hero from "@/src/components/Hero";
import Header from "@/src/components/Hero";
import Nav from "@/src/components/Nav";

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
      <footer>
        nodeplace &copy; 2024. All rights reserved
      </footer>
    </>
  );
}