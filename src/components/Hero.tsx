"use client";

import {
  advercaseBold,
  advercaseRegular,
  hostGroteskRegular,
} from "@/app/font";
import { cn } from "@/utils/cn";
import Signup from "./Signup";
import { TextAnimation } from "./TextAnimation";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const HighlightedSpan = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className={cn(
        advercaseRegular.className,
        "text-(--accent) drop-shadow-[0_0_1px_var(--accent)]"
      )}
    >
      {children}
    </span>
  );
};

const Hero = () => {
  return (
    <div className="min-h-[calc(100svh-8rem)] flex flex-col gap-4 row-start-2 items-center justify-center sm:items-start">
      <h1
        className={cn(
          advercaseBold.className,
          "font-bold flex flex-col items-center w-full"
        )}
      >
        <TextAnimation className="text-3xl" text="Join our" />
        <TextAnimation
          className="text-[2.5rem] sm:text-[3rem] text-(--accent) drop-shadow-[0_0_3px_var(--accent)] relative bottom-1"
          text="90 Day Launch"
        />
        <TextAnimation
          className="text-3xl relative bottom-3"
          text="Newsletter"
        />
      </h1>
      <motion.div
        className={cn(
          hostGroteskRegular.className,
          "flex flex-col gap-4 w-full md:w-1/2 px-3 text-center sm:text-left sm:mx-auto"
        )}
      >
        <p>
          <HighlightedSpan>Million or Bust Challenge</HighlightedSpan>: invent a
          new hardware product, sell{" "}
          <HighlightedSpan>$1 MILLION</HighlightedSpan> in preorders, and ship
          to customers, <HighlightedSpan>all in 90 days</HighlightedSpan>.
        </p>
        <p>
          If you&apos;re an entrepreneur, aspiring to be one, or just excited to
          watch a business get launched FAST, we made our 90 Day Launch
          newsletter for you. We&apos;ll be sharing behind-the-scenes updates,
          guides and more.
        </p>
      </motion.div>
      <motion.div className="flex w-full justify-center">
        <Signup />
      </motion.div>
    </div>
  );
};

export { Hero };
