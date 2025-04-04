"use client";

import { advercaseBold, hostGroteskRegular } from "@/app/font";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HighlightedLink, HighlightedSpan } from "./Text";
import { Signup } from "./Signup";
import { TextAnimation } from "./TextAnimation";

const Hero = () => {
  const [hasSubscribed, setHasSubscribed] = useState(false);

  return (
    <div className="min-h-[calc(100svh-8rem)] flex flex-col gap-0 row-start-2 items-center justify-center sm:items-start relative z-20 pb-12">
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
      <motion.div className="flex w-full justify-center mb-8">
        <Signup
          hasSubscribed={hasSubscribed}
          setHasSubscribed={setHasSubscribed}
        />
      </motion.div>
      <motion.div className="flex w-full justify-center mb-8">
        {hasSubscribed && (
          <p className="w-84 sm:w-96 mx-auto">
            We&apos;re building a hardware business in 90 days, and we&apos;re
            building it{" "}
            <HighlightedSpan className="text-sm">with you</HighlightedSpan>.
            Want to{" "}
            <Link
              href="/submit"
              className="text-(--accent) border-b border-b-(--accent) hover:text-(--accent)/90 transition-all"
            >
              submit a logo design?
            </Link>
            <div className="w-full border-b-(--accent) border-b mt-8" />
          </p>
        )}
      </motion.div>
      <motion.div
        className={cn(
          hostGroteskRegular.className,
          "flex flex-col gap-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-3 mx-auto mb-8"
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

      <motion.div
        className={cn(
          hostGroteskRegular.className,
          "flex flex-col gap-4 sm:w-1/2 md:w-2/3 lg:w-2/3 px-3 mx-auto"
        )}
      >
        <p>
          If you&apos;re an entrepreneur, aspiring to be one, or just excited to
          watch a business get launched 100% PUBLICLY & QUICKLY, you need to
          join our 90 Day Launch community. Here&apos;s what you can expect
          EVERY MONTH.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Social Media and Marketing Strategy with{" "}
            <HighlightedLink href="https://www.youtube.com/Lostleblanc">
              Lost LeBlanc
            </HighlightedLink>{" "}
            (The strategies Christian has used to earn millions)
          </li>
          <li>
            Product & Manufacturing Blueprints with{" "}
            <HighlightedLink href="https://x.com/coffeewithjer">
              Jer
            </HighlightedLink>{" "}
            (How he designs $100M+ of hardware products)
          </li>
          <li>
            E-comm Deep Dives with{" "}
            <HighlightedLink href="https://www.linkedin.com/in/nickhong">
              Nick
            </HighlightedLink>{" "}
            (The tactics used for $6M+ in NFT sales for Patrick Mahomes and
            major eCommerce platforms)
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export { Hero };
