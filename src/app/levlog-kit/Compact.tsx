"use client";

import { HighlightedSpan } from "@/components/Text";
import { cn } from "@/utils/cn";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { advercaseBold, hostGroteskRegular } from "../font";

function Compact() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShow(true);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center gap-4 w-full max-w-screen-lg md:mx-auto px-8 relative z-20 md:py-24",
        hostGroteskRegular.className
      )}
      id="compact"
      initial={{ opacity: 0, y: 50 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className={cn(advercaseBold.className, "text-3xl ")}
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A{" "}
        <span className="text-(--accent) drop-shadow-[0_0_2px_var(--accent)]">
          Compact
        </span>{" "}
        Vlogging Kit
      </motion.h2>
      <motion.div
        className={cn("flex flex-col items-center justify-center")}
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
        className="w-full flex flex-col md:flex-row gap-8 md:py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          className="relative rounded-lg overflow-hidden w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            src="/vlog/renders/thin.png"
            alt="Compact LeVlog Kit"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col gap-2">
            <h3 className={cn(advercaseBold.className, "text-2xl")}>
              7mm thin
            </h3>
            <p className="">
              We&apos;re using aerospace-grade aluminum to keep the LeVlog kit
              thin and light yet strong. At just 7mm thin, you won&apos;t even
              notice it&apos;s there.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export { Compact };
