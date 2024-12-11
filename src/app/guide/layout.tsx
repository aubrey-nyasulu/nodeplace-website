import Nav from "@/src/components/Nav"
import { DocumentationContextProvider } from "@/src/context/DocumentationStateProvider";
import GuideSideNav from "@/src/ui/GuidPage/components/GuideSideNav";

export default function MDXLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DocumentationContextProvider>
      <header className="relative pt-3 w-full h-fit space-y-4 py-24" >
        <Nav />
      </header>
      <main className="langingpage-container h-fit flex gap-4  px-4 lg:px-0 justify-between">
        <GuideSideNav />
        <div className="w-0 hidden md:block md:w-72"></div>
        {children}
      </main>
    </DocumentationContextProvider>
  )
}