"use client";

import { cn } from "@/utils/cn";
import { advercaseBold, hostGroteskRegular } from "../font";
import Link from "next/link";
import { motion } from "framer-motion";
import { Signup } from "@/components/Signup";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";

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
      className="underline hover:text-(--accent) transition-colors duration-300"
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

function LeVlogHero() {
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const { width } = useWindowSize();

  const isMobile = width < 768;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center max-w-screen-lg mx-auto md:h-[calc(100vh-100px)] gap-8 md:px-8 relative z-20",
        hostGroteskRegular.className
      )}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={
            isMobile
              ? { opacity: 0, y: 100, x: 0 }
              : { opacity: 0, x: -100, y: 0 }
          }
          animate={
            isMobile ? { opacity: 1, y: 0, x: 0 } : { opacity: 1, x: 0, y: 0 }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-1/2 relative flex flex-col justify-end md:mt-0"
        >
          <video autoPlay muted loop playsInline className="w-full h-full">
            <source src="/vlog/renders/full-modes.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-center justify-center"></div>
          <p className="absolute text-xs bottom-0 left-0 w-full text-center">
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
            isMobile ? { opacity: 1, y: 0, x: 0 } : { opacity: 1, x: 0, y: 0 }
          }
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMobile ? 0.3 : 0,
          }}
          className="flex flex-col gap-4 items-start w-full md:w-1/2 px-8 md:px-0"
        >
          <span className={cn("text-xl")}>Introducing the</span>
          <h1
            className={cn(
              "text-5xl font-bold text-center text-(--accent) drop-shadow-[0_0_2px_var(--accent)]",
              advercaseBold.className
            )}
          >
            LeVlog Kit
          </h1>
          <div className={cn("text-xl", advercaseBold.className)}>
            The all-in-one phone vlogging accessory made for the digital nomad
          </div>
          <div className={cn("text-xl")}>
            A{" "}
            <HighlightLink href="/levlog-kit/#versatile">
              versatile
            </HighlightLink>
            , <HighlightLink href="/levlog-kit/#compact">compact</HighlightLink>
            , <HighlightLink href="/levlog-kit/#premium">premium</HighlightLink>{" "}
            phone tripod and accessories kit that lets digital nomads capture
            their adventures.
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
      >
        <div className="flex flex-col items-center justify-center gap-0 mt-6 md:mt-12 pb-36 md:pb-0">
          {!hasSubscribed && (
            <div className="px-7 text-left md:text-left">
              Join our 90 Day Launch Community to get updates on the LeVlog Kit!
            </div>
          )}
          <Signup
            hasSubscribed={hasSubscribed}
            setHasSubscribed={setHasSubscribed}
          />
          {hasSubscribed && (
            <div className="pt-4">
              Want to{" "}
              <Link
                href="/submit"
                target="_blank"
                className="underline text-(--accent) hover:text-(--accent)/90 transition-colors duration-300"
              >
                design us a logo
              </Link>{" "}
              with us next?
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export { LeVlogHero };
