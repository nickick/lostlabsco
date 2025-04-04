"use client";

import { HighlightedSpan } from "@/components/Text";
import { cn } from "@/utils/cn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { advercaseBold, hostGroteskRegular } from "../font";
import { stickConfigurations } from "./data";
import { useWindowSize } from "usehooks-ts";

const StickConfig = ({
  config,
  index,
  isInView,
}: {
  config: (typeof stickConfigurations)[number];
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.li
      key={config.name}
      className=""
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <strong
        className={cn(
          "sm:hidden block text-2xl md:text-lg md:text-center sm:pt-4 py-4",
          advercaseBold.className
        )}
      >
        {config.name}
      </strong>
      <div className="flex flex-col items-center justify-center w-full gap-4 sm:pt-0">
        <div
          className="w-full h-36 md:h-24"
          style={{
            backgroundImage: `url(${config.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="px-4 sm:px-4 flex flex-col items-center justify-center gap-2 pb-4">
          <strong
            className={cn(
              "hidden sm:block text-center",
              advercaseBold.className
            )}
          >
            {config.name}
          </strong>
          <p>{config.description}</p>
        </div>
      </div>
    </motion.li>
  );
};
const Versatile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { width } = useWindowSize();

  const isMobile = width < 768;

  return (
    <motion.div
      className={cn(
        "w-full max-w-screen-lg mx-auto z-20",
        hostGroteskRegular.className
      )}
      initial={
        isMobile ? { opacity: 0, y: 100, x: 0 } : { opacity: 0, x: 100, y: 0 }
      }
      animate={
        isInView
          ? isMobile
            ? { opacity: 1, y: 0, x: 0 }
            : { opacity: 1, x: 0, y: 0 }
          : isMobile
          ? { opacity: 0, y: 100, x: 0 }
          : { opacity: 0, x: 100, y: 0 }
      }
      transition={{ duration: 0.5, delay: 0.5 }}
      id="versatile"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center px-4 md:pb-16 mb-16 md:mt-0">
        <div className="flex flex-col md:items-center md:justify-center py-8 gap-4 px-4 md:px-8 xl:px-0">
          <h2 className={cn("text-3xl ", advercaseBold.className)}>
            The most{" "}
            <span className="text-(--accent) drop-shadow-[0_0_2px_var(--accent)]">
              versatile
            </span>{" "}
            phone stand
          </h2>
          <div className="text-lg">
            The LeVlog kit&apos;s articulated tripod stand allows for{" "}
            <HighlightedSpan>6 different</HighlightedSpan> use cases.
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 w-full">
            {stickConfigurations.map((config, index) => (
              <StickConfig
                key={config.name}
                config={config}
                index={index}
                isInView={isInView}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Versatile;
