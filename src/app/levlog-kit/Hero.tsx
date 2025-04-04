"use client";

import { cn } from "@/utils/cn";
import { advercaseBold, hostGroteskRegular } from "../font";
import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center justify-center max-w-screen-lg mx-auto h-[calc(100vh-100px)] gap-12 px-8 relative z-20",
        hostGroteskRegular.className
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-1/2 relative flex flex-col justify-end"
      >
        <video autoPlay muted loop playsInline className="w-full h-full">
          <source src="/vlog/renders/full-modes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-center justify-center"></div>
        {/* <div className="absolute w-full bottom-4 text-white text-center">
          <h2 className="text-2xl font-bold">LeVlog Kit</h2>
        </div> */}
        <p className="absolute text-xs bottom-0 left-0 w-full text-center">
          Prototype renders, currently designing final product.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col gap-4 items-start w-1/2"
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
          <HighlightLink href="/levlog-kit/#versatile">versatile</HighlightLink>
          , <HighlightLink href="/levlog-kit/#compact">compact</HighlightLink>,{" "}
          <HighlightLink href="/levlog-kit/#premium">premium</HighlightLink>{" "}
          phone tripod and accessories kit that lets digital nomads capture
          their adventures.
        </div>
      </motion.div>
    </div>
  );
}

export { LeVlogHero };
