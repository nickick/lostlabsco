"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { advercaseBold } from "../font";
import { insertConfigurations } from "./data";

const Customizable = () => {
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
      className="flex flex-col items-center justify-center gap-4 w-full max-w-screen-lg md:mx-auto px-4 md:px-8 relative z-20"
      initial={{ opacity: 0, y: 50 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      id="customizable"
    >
      <motion.h2 className={cn(advercaseBold.className, "text-3xl")}>
        {" "}
        <span className="text-(--accent) drop-shadow-[0_0_2px_var(--accent)]">
          Customize
        </span>{" "}
        for Your Needs
      </motion.h2>
      <div className="flex flex-col items-center justify-center mb-12 px-4 xl:px-0">
        <div className="flex flex-col items-center justify-center gap-8">
          The LeVlog kit&apos;s modular back case design allows for 4 different
          useful back accessories.
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 w-full">
            {insertConfigurations.map((config) => (
              <li key={config.name} className="pb-4">
                <div className="flex flex-col items-center justify-center w-full gap-2 relative">
                  <div className="relative">
                    <Image
                      src={config.image}
                      alt={config.name}
                      width={600}
                      height={400}
                      className="w-full h-full"
                    />
                    {config.status === "coming soon" && (
                      <div className="absolute top-0 right-0 z-10 bg-gradient-to-b from-black/0 to-black/50 w-full h-full"></div>
                    )}
                    <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
                      {config.status === "coming soon" && (
                        <span className="text-sm bg-white text-black px-2 py-1 rounded-full">
                          {config.status}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="md:px-4 w-full flex flex-col gap-2">
                    <strong
                      className={cn(
                        "pt-2 w-full md:text-center text-lg",
                        advercaseBold.className
                      )}
                    >
                      {config.name}
                    </strong>
                    <p>{config.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="w-full pt-8 md:pt-0 flex justify-center">
            Each of these accessories are Magsafe compliant and can be used
            independently or combined with the articulated stand.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export { Customizable };
