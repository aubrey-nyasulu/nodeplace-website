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
      <main className="langingpage-container h-fit flex gap-4  px-4 lg:px-0 justify-between">
        {children}
      </main>
    </>
  )
}