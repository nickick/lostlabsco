import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BackgroundLeaves } from "@/components/BackgroundLeaves";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lost Labs",
  description: "Join us for our 90 Day Launch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative h-full w-full`}
      >
        <div className="w-full h-full relative">
          <BackgroundLeaves
            imgSrc="/dark-leaves-2.jpg"
            className="hidden sm:blockopacity-20 -top-[30%] sm:top-0 left-1/4 -translate-x-1/2  w-3/4 h-full rotate-[300deg]"
          />
          <BackgroundLeaves
            imgSrc="/dark-leaves-2.jpg"
            className="hidden sm:block opacity-20 -top-[30%] sm:top-0 left-3/4 -translate-x-1/2  w-3/4 h-full scale-y-[-1] rotate-[240deg]"
          />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
