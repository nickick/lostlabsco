"use client";

import { LeavesBackground } from "@/components/LeavesBackground";
import { PostSignupModal } from "@/components/PostSignupModal";
import { ReserveSell } from "@/components/ReserveSell";
import { motion } from "framer-motion";
import { useState } from "react";

const CTABottom = () => {
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
        <div className="flex flex-col items-center justify-center gap-4 mt-6 md:mt-12 pb-36 z-20 relative">
          <ReserveSell />
        </div>
      </motion.div>
    </>
  );
};

export { CTABottom };
