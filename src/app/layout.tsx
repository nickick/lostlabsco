import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BackgroundLeaves } from "@/components/BackgroundLeaves";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { cn } from "@/utils/cn";
import { hostGroteskRegular } from "./font";
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
        className={cn(
          geistSans.variable,
          geistMono.variable,
          hostGroteskRegular.className,
          "antialiased relative h-full w-full overflow-x-hidden"
        )}
      >
        <div className="w-full h-full relative">
          <AnalyticsProvider>
            <BackgroundLeaves
              imgSrc="/dark-leaves-2.jpg"
              className="hidden sm:block opacity-20 top-0 left-1/4 -translate-x-1/2  w-3/4 h-full rotate-[300deg]"
              initial={{ opacity: 0, left: "25%", top: "0%" }}
              animate={{ opacity: 0.2, left: "25%", top: "0%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <BackgroundLeaves
              imgSrc="/dark-leaves-2.jpg"
              className="hidden sm:block opacity-20 top-0 left-3/4 -translate-x-1/2  w-3/4 h-full scale-y-[-1] rotate-[240deg]"
              initial={{ opacity: 0, left: "75%", top: "0%" }}
              animate={{ opacity: 0.2, left: "75%", top: "0%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <Navbar />
            {children}
            <Footer />
          </AnalyticsProvider>
        </div>
      </body>
    </html>
  );
}
