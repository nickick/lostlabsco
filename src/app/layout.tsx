import { Trackers } from "@/components/analytics/Trackers";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { Footer } from "@/components/Footer";
import { LeavesBackground } from "@/components/LeavesBackground";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { hostGroteskRegular } from "./font";
import "./globals.css";

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
  description: "Join our 90 Day Launch Community!",
  openGraph: {
    title: "Lost Labs",
    description: "Join our 90 Day Launch Community!",
    images: [
      {
        url: "/opengraph-image.jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lost Labs",
    description: "Join our 90 Day Launch Community!",
    images: [
      {
        url: "/opengraph-image.jpeg",
      },
    ],
  },
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
        <Trackers />
        <div className="w-full h-full relative">
          <AnalyticsProvider>
            <LeavesBackground />
            <Navbar />
            {children}
            <Footer />
          </AnalyticsProvider>
        </div>
      </body>
    </html>
  );
}
