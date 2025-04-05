"use client";

import { Signup } from "@/components/Signup";
import SignupFollowUp from "@/components/SignupFollowUp";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useState } from "react";
import { advercaseBold } from "../font";
import { PostSignupModal } from "@/components/PostSignupModal";
import { LeavesBackground } from "@/components/LeavesBackground";

const CTABottom = () => {
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [postSignupModalOpen, setPostSignupModalOpen] = useState(false);

  return (
    <>
      <PostSignupModal
        open={postSignupModalOpen}
        setOpen={setPostSignupModalOpen}
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        className="relative"
      >
        <LeavesBackground className="max-h-[70svh]" />
        <div className="flex flex-col items-center justify-center gap-4 mt-6 md:mt-12 pb-36">
          <div>Want to learn more?</div>
          <div className={cn("flex flex-col items-center justify-center")}>
            <div
              className={cn(
                "flex flex-col items-center justify-center gap-2 text-base"
              )}
            >
              <div>Join our</div>
              <div
                className={cn(
                  "text-3xl text-(--accent) drop-shadow-[0_0_2px_var(--accent)]",
                  advercaseBold.className
                )}
              >
                90 Day Launch
              </div>
              <div>Community</div>
            </div>
            <Signup
              hasSubscribed={hasSubscribed}
              setHasSubscribed={setHasSubscribed}
              setPostSignupModalOpen={setPostSignupModalOpen}
              eventName="CTA Bottom Signup Button Clicked"
            />
            {hasSubscribed && <SignupFollowUp />}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { CTABottom };
