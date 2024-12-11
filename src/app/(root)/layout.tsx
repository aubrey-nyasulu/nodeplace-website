import Header from "@/src/components/Header";

export default function MDXLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <footer>
        nodeplace &copy; 2024. All rights reserved
      </footer>
    </>
  );
}