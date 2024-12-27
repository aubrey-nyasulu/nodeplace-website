import Footer from "@/src/components/Footer";
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
      <Footer />
    </>
  );
}