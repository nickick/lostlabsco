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
import Link from "next/link";
import { HighlightedSpan } from "./HighlightedSpan";

// const container = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.025,
//     },
//   },
// };

const Hero = () => {
  return (
    <div className="min-h-[calc(100svh-8rem)] flex flex-col gap-0 row-start-2 items-center justify-center sm:items-start">
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
          className="text-3xl relative bottom-4"
          text="Community"
        />
      </h1>
      <motion.div
        className={cn(
          hostGroteskRegular.className,
          "flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 px-3 sm:mx-auto"
        )}
      >
        <p className="w-full">
          This is the{" "}
          <HighlightedSpan>Million or Bust Challenge</HighlightedSpan>:
        </p>
        <ul className="list-disc list-inside">
          <li>Invent a new hardware product</li>
          <li>Turn the concept into a real product</li>
          <li>
            Sell <HighlightedSpan>$1 MILLION</HighlightedSpan> in preorders
          </li>
          <li>Begin shipping to customers</li>
        </ul>
        <p className="w-full">
          <HighlightedSpan className={"uppercase"}>
            all in 90 days.
          </HighlightedSpan>
        </p>
      </motion.div>
      <motion.div className="flex w-full justify-center mb-6">
        <Signup />
      </motion.div>
      <motion.div
        className={cn(
          hostGroteskRegular.className,
          "flex flex-col gap-4 w-full md:w-1/2 px-3 text-center sm:text-left sm:mx-auto"
        )}
      >
        <p>
          If you&apos;re an entrepreneur, aspiring to be one, or just excited to
          watch a business get launched FAST, we made our 90 Day Launch
          newsletter for you. We&apos;ll be sharing behind-the-scenes updates,
          guides and more.
        </p>
      </motion.div>
    </div>
  );
};

export { Hero };
