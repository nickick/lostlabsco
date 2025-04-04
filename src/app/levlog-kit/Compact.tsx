"use client";

import { cn } from "@/utils/cn";
import { advercaseBold, hostGroteskRegular } from "../font";
import { HighlightedSpan } from "@/components/Text";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Compact() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center gap-4 w-full max-w-screen-lg md:mx-auto px-8",
        hostGroteskRegular.className
      )}
      id="compact"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className={cn(
          advercaseBold.className,
          "text-3xl drop-shadow-[0_0_2px_var(--accent)]"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A <span className="text-(--accent)">Compact</span> Vlogging Kit
      </motion.h2>
      <motion.div
        className={cn("flex flex-col items-center justify-center")}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-lg">
          The LeVlog kit is designed compact so that it can{" "}
          <HighlightedSpan className="text-base">
            stay on your phone
          </HighlightedSpan>{" "}
          and{" "}
          <HighlightedSpan className="text-base">
            fit in your pocket
          </HighlightedSpan>
          .
        </p>
      </motion.div>
      <motion.div
        className="w-full flex flex-col md:flex-row gap-6 md:py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          className="relative rounded-lg overflow-hidden w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            src="/vlog/renders/flat.png"
            alt="Compact LeVlog Kit"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col gap-2">
            <h3 className={cn(advercaseBold.className, "text-2xl")}>
              7mm thin
            </h3>
            <p className="">
              We&apos;re using high-grade aluminum to keep the LeVlog kit thin
              and light yet strong. At just 7mm thin, you won&apos;t even notice
              it&apos;s there.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export { Compact };
