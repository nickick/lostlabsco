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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <BackgroundLeaves
          imgSrc="/dark-leaves.jpg"
          className="hidden sm:block left-1/2 rotate-180"
        />
        <BackgroundLeaves
          imgSrc="/dark-leaves-2.jpg"
          className="hidden sm:block -left-[50%] rotate-180"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
