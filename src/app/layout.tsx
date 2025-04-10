import { Trackers } from "@/components/analytics/Trackers";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { hostGroteskRegular } from "./font";
import "./globals.css";
import ogImage from "./opengraph-image.jpeg";
import { headers } from "next/headers";
import { HEADER_KEYS } from "@/utils/headerKeys";

export const metadata: Metadata = {
  title: "Lost Labs",
  description: "Join our 90 Day Launch Community!",
  openGraph: {
    title: "Lost Labs",
    description: "Join our 90 Day Launch Community!",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lost Labs",
    description: "Join our 90 Day Launch Community!",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

const lightThemePaths = ["/product", "/snapkit"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = headers().get(HEADER_KEYS.PATHNAME);

  const isLightTheme = lightThemePaths.includes((pathname ?? "").toLowerCase());

  return (
    <html lang="en" data-theme={isLightTheme ? "light" : "dark"}>
      <body
        className={cn(
          hostGroteskRegular.className,
          "antialiased relative h-full w-full overflow-x-hidden bg-background"
        )}
      >
        <Trackers />
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
