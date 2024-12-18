import type { Metadata } from "next";
// import localFont from "next/font/local";
import { inter } from '@/src/assets/fonts/fonts';
import "@/src/styles/global.css";
import { AppStateProvider } from "../context/AppstateProvider";

export const metadata: Metadata = {
  title: "NodePlace",
  description: "NodePlace is a nodejs framework focusing on api development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased text-stone-800 dark:text-white/90`}
      >
        <AppStateProvider>
          {children}
        </AppStateProvider>
      </body>
    </html>
  );
}

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });