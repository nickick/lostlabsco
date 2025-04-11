"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { advercaseBold } from "../font";
import { insertConfigurations } from "./data";
import { productName } from "@/utils/constants";

const CustomizedSection = ({
  config,
}: {
  config: (typeof insertConfigurations)[number];
}) => {
  return (
    <li
      key={config.name}
      className="pb-4 border-1 border-gray-300 bg-accent drop-shadow-md"
    >
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
        <div className="px-4 w-full flex flex-col gap-2">
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
  );
};

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
    <div className="bg-accent text-white">
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center gap-4 w-full max-w-screen-lg md:mx-auto px-4 md:px-8 relative z-20 pt-20 pb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        id="customizable"
      >
        <motion.h2
          className={cn(advercaseBold.className, "text-3xl text-black")}
        >
          {" "}
          <span className="text-white dark:drop-shadow-[0_0_2px_accent]">
            Customize
          </span>{" "}
          for Your Needs
        </motion.h2>
        <div className="flex flex-col items-center justify-center mb-12 px-4 xl:px-0">
          <div className="flex flex-col items-center justify-center gap-8">
            The {productName}&apos;s swappable back case allows you to pick the
            exact setup for your needs.
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-4 w-full">
              {insertConfigurations.map((config) => (
                <CustomizedSection key={config.name} config={config} />
              ))}
            </ul>
            <p className="w-full pt-8 md:pt-0 flex justify-center">
              Each of these accessories are MagSafe compatible and can be used
              independently or combined with the articulated stand.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export { Customizable };
