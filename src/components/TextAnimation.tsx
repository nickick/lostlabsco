"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { forwardRef, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  text: string;
  styleByIndex?: {
    start: number;
    end: number;
    className: string;
  }[];
}

const TextAnimation = forwardRef<HTMLDivElement, Props>(
  ({ className, text, styleByIndex, ...props }, ref) => {
    const item = {
      hidden: {
        y: "200%",
        opacity: 0,
        transition: {
          ease: [0.455, 0.03, 0.515, 0.955],
          duration: 0.85,
        },
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          ease: [0.455, 0.03, 0.515, 0.955],
          duration: 0.75,
        },
      },
    };

    const words = text.split(" ").map((word) => {
      const characters = word.split("");
      characters.push("\u00A0");
      return characters;
    });
    let letterIndex = 0;

    return (
      <span ref={ref} {...props} className={cn(className)}>
        {words.map((word, index) => {
          return (
            <span key={index} className="whitespace-nowrap overflow-hidden">
              {word.map((element) => {
                letterIndex++;
                return (
                  <span
                    key={letterIndex}
                    className="overflow-hidden inline-block"
                  >
                    <motion.span
                      className={cn(
                        "inline-block",
                        styleByIndex?.find(
                          (style) =>
                            letterIndex >= style.start &&
                            letterIndex <= style.end
                        )?.className
                      )}
                      variants={item}
                    >
                      {element}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    );
  }
);

TextAnimation.displayName = "TextAnimation";

export { TextAnimation };
