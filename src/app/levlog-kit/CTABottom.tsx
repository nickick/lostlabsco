"use client";

import { Signup } from "@/components/Signup";
import SignupFollowUp from "@/components/SignupFollowUp";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useState } from "react";
import { advercaseBold } from "../font";
const CTABottom = () => {
  const [hasSubscribed, setHasSubscribed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
    >
      <div className="flex flex-col items-center justify-center gap-4 mt-6 md:mt-12 pb-36 md:pb-12">
        <div>Want to learn more?</div>
        <div className={cn("flex flex-col items-center justify-center")}>
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-2 text-xl",
              advercaseBold.className
            )}
          >
            <div>Join our</div>
            <div
              className={cn(
                "text-4xl text-(--accent) drop-shadow-[0_0_2px_var(--accent)]"
              )}
            >
              90 Day Launch
            </div>
            <div>Community</div>
          </div>
          <Signup
            hasSubscribed={hasSubscribed}
            setHasSubscribed={setHasSubscribed}
          />
          {hasSubscribed && <SignupFollowUp />}
        </div>
      </div>
    </motion.div>
  );
};

export { CTABottom };
