"use client";

import { PostSignupModal } from "@/components/PostSignupModal";
import { ReserveSell } from "@/components/ReserveSell";
import { motion } from "framer-motion";
import { useState } from "react";

const CTABottom = () => {
  const [postSignupModalOpen, setPostSignupModalOpen] = useState(false);

  return (
    <div className="relative py-12">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/sky-1.jpg')",
          backgroundSize: "200%",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        className="bg-accent text-white py-12 md:max-w-xl rounded-lg mx-4 md:mx-auto px-4 md:px-0 relative z-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        style={{
          boxShadow: "0 4px 10px 0px rgba(0, 0, 0, 0.4)",
        }}
      >
        <PostSignupModal
          open={postSignupModalOpen}
          setOpen={setPostSignupModalOpen}
        />
        <div className="relative">
          <div className="flex flex-col items-center justify-center gap-4 z-20 relative">
            <ReserveSell />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export { CTABottom };
