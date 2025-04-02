"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

function BackgroundLeaves({
  className,
  imgSrc,
  initial,
  animate,
  transition,
}: {
  className?: string;
  imgSrc: string;
  initial?: {
    opacity: number;
    left: string;
    top: string;
  };
  animate?: {
    opacity: number;
    left: string;
    top: string;
  };
  transition?: {
    duration: number;
    ease: string;
  };
}) {
  return (
    <motion.div
      className={cn("absolute mix-blend-lighten", className)}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={initial}
      animate={animate}
      transition={transition}
    />
  );
}

export { BackgroundLeaves };
