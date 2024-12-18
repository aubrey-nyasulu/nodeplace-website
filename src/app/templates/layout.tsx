import Nav from "@/src/components/Nav"

export default function MDXLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="relative pt-3 w-full h-fit space-y-4 py-24" >
        <Nav />
      </header>
      <>
        {children}
      </>
    </>
  )
}