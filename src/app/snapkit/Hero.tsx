"use client";

import { PostSignupModal } from "@/components/PostSignupModal";
import { ReserveSell } from "@/components/ReserveSell";
import { cn } from "@/utils/cn";
import { productName } from "@/utils/constants";
import { motion } from "framer-motion";
import Video from "next-video";
import Link from "next/link";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { advercaseBold, advercaseRegular, hostGroteskRegular } from "../font";
import fullModes from "/videos/full-modes.mp4";

function HighlightLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="underline light:hover:text-black hover:text-(--accent) transition-colors duration-300"
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById(href.split("#")[1]);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        return false;
      }}
    >
      {children}
    </Link>
  );
}

function HighlightedSpan({ children }: { children: React.ReactNode }) {
  return <span className="">{children}</span>;
}

function ProductHero() {
  const [postSignupModalOpen, setPostSignupModalOpen] = useState(false);
  const { width } = useWindowSize();

  const isMobile = width < 768;

  return (
    <div className="w-full relative">
      <div
        className="absolute inset-0 bg-sky/70 opacity-85 hue-rotate-[2deg]"
        style={{
          backgroundImage: "url('/sky-1.jpg')",
          backgroundSize: "400%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <PostSignupModal
        open={postSignupModalOpen}
        setOpen={setPostSignupModalOpen}
      />
      <div className="flex flex-col items-center justify-center bg-transparent relative z-20">
        <div
          className={cn(
            "flex flex-col items-center justify-center md:gap-12 md:my-12",
            hostGroteskRegular.className
          )}
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:h-[24rem] relative">
            <motion.div
              initial={
                isMobile
                  ? { opacity: 0, y: 100, x: 0 }
                  : { opacity: 0, x: -100, y: 0 }
              }
              animate={
                isMobile
                  ? { opacity: 1, y: 0, x: 0 }
                  : { opacity: 1, x: 0, y: 0 }
              }
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full md:w-1/2 relative flex flex-col justify-end md:mt-0 h-full bg-white md:rounded-l-lg overflow-hidden"
              style={{
                boxShadow: "0 0 10px 0px var(--background)",
              }}
              layoutId="hero-video"
            >
              <Video
                src={fullModes}
                autoPlay={true}
                muted
                loop
                playsInline
                controls={false}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-background-mid/30 flex items-center justify-center"></div>
              <p className="absolute text-xs bottom-2 left-0 w-full text-center">
                Prototype renders, final designs subject to change.
              </p>
            </motion.div>
            <motion.div
              initial={
                isMobile
                  ? { opacity: 0, y: 100, x: 0 }
                  : { opacity: 0, x: 100, y: 0 }
              }
              animate={
                isMobile
                  ? { opacity: 1, y: 0, x: 0 }
                  : { opacity: 1, x: 0, y: 0 }
              }
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: isMobile ? 0.3 : 0,
              }}
              className="w-full md:w-1/2 px-8 md:px-0 pl-12 bg-accent md:h-[24rem] md:rounded-r-lg"
              style={{
                boxShadow: "0 10px 10px -4px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="flex flex-col gap-4 items-start justify-center w-full md:ml-12 pr-12 md:max-w-xl h-full py-8">
                <span className={cn("text-xl")}>Introducing the</span>
                <h1
                  className={cn(
                    "text-[3rem] leading-[3rem] font-bold text-center",
                    "md:text-[3.5rem] md:leading-[3.5rem]",
                    "lg:text-[4rem] lg:leading-[4rem]",
                    "text-white dark:drop-shadow-[0_0_2px_var(--accent)]",
                    advercaseRegular.className
                  )}
                >
                  {productName}
                </h1>
                <div className={cn("text-xl", advercaseBold.className)}>
                  The all-in-one phone accessory made for{" "}
                  <HighlightedSpan>creators</HighlightedSpan>,{" "}
                  <HighlightedSpan>travelers</HighlightedSpan>, and{" "}
                  <HighlightedSpan>digital nomads</HighlightedSpan>.
                </div>
                <div className={cn("text-xl text-white")}>
                  A{" "}
                  <HighlightLink href="/product/#versatile">
                    versatile
                  </HighlightLink>
                  ,{" "}
                  <HighlightLink href="/product/#customizable">
                    customizable
                  </HighlightLink>
                  ,{" "}
                  <HighlightLink href="/product/#compact">
                    compact
                  </HighlightLink>{" "}
                  phone tripod and accessories kit that lets digital nomads
                  capture their adventures.
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            className="w-full"
          >
            <div
              className="flex flex-col items-center justify-center gap-0 py-8 md:mb-0 w-full md:rounded-lg md:w-1/2 md:max-w-[32rem] mx-auto bg-accent text-white drop-shadow-lg px-8"
              style={{
                boxShadow: "0px 10px 10px -4px rgba(0, 0, 0, 0.4)",
              }}
            >
              <ReserveSell />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { ProductHero };
