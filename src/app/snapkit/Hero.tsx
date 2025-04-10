"use client";

import { PostSignupModal } from "@/components/PostSignupModal";
import { ReserveSell } from "@/components/ReserveSell";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Video from "next-video";
import Link from "next/link";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { advercaseBold, hostGroteskRegular } from "../font";
import fullModes from "/videos/full-modes.mp4";
import { productName } from "@/utils/constants";
import { dropShadow } from "@/utils/dropShadow";
function HighlightLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="underline hover:text-(--accent) transition-colors duration-300"
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById(href.split("#")[1]);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        return false;
      }}
    >
      {children}
    </Link>
  );
}

function ProductHero() {
  const [postSignupModalOpen, setPostSignupModalOpen] = useState(false);
  const { width } = useWindowSize();

  const isMobile = width < 768;

  return (
    <>
      <PostSignupModal
        open={postSignupModalOpen}
        setOpen={setPostSignupModalOpen}
      />
      <div
        className={cn(
          "flex flex-col items-center justify-center max-w-screen-lg mx-auto md:h-[calc(100vh-100px)] gap-8 md:px-8 relative z-20",
          hostGroteskRegular.className
        )}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={
              isMobile
                ? { opacity: 0, y: 100, x: 0 }
                : { opacity: 0, x: -100, y: 0 }
            }
            animate={
              isMobile ? { opacity: 1, y: 0, x: 0 } : { opacity: 1, x: 0, y: 0 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full md:w-1/2 relative flex flex-col justify-end md:mt-0"
          >
            <Video
              src={fullModes}
              autoPlay={true}
              muted
              loop
              playsInline
              controls={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 flex items-center justify-center"></div>
            <p className="absolute text-xs bottom-0 left-0 w-full text-center">
              Prototype renders, final designs subject to change.
            </p>
          </motion.div>
          <motion.div
            initial={
              isMobile
                ? { opacity: 0, y: 100, x: 0 }
                : { opacity: 0, x: 100, y: 0 }
            }
            animate={
              isMobile ? { opacity: 1, y: 0, x: 0 } : { opacity: 1, x: 0, y: 0 }
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: isMobile ? 0.3 : 0,
            }}
            className="flex flex-col gap-4 items-start w-full md:w-1/2 px-8 md:px-0"
          >
            <span className={cn("text-xl")}>Introducing the</span>
            <h1
              className={cn(
                "text-5xl font-bold text-center dark:text-(--accent)",
                dropShadow(2),
                advercaseBold.className
              )}
            >
              {productName}
            </h1>
            <div className={cn("text-xl", advercaseBold.className)}>
              The all-in-one phone accessory made for creators, travelers, and
              digital nomads.
            </div>
            <div className={cn("text-xl")}>
              A{" "}
              <HighlightLink href="/product/#versatile">
                versatile
              </HighlightLink>
              ,{" "}
              <HighlightLink href="/product/#customizable">
                customizable
              </HighlightLink>
              , <HighlightLink href="/product/#compact">compact</HighlightLink>{" "}
              phone tripod and accessories kit that lets digital nomads capture
              their adventures.
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex flex-col items-center justify-center gap-0 mt-6 md:mt-12 pb-36 md:pb-0">
            <ReserveSell />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export { ProductHero };
