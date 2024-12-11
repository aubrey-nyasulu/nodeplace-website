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
      <main className="langingpage-container h-full flex gap-4 fixed left-[50%] -translate-x-[50%] top-0 px-4 lg:px-0">
        <GuideSideNav />
        {children}
      </main>
    </DocumentationContextProvider>
  )
}