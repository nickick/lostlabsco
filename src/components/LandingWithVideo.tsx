"use client";

import { advercaseBold } from "@/app/font";
import vid from "/videos/lca-intro.mp4";
import Video from "next-video";
import { cn } from "@/utils/cn";
import { Signup } from "./Signup";
import { PostSignupModal } from "./PostSignupModal";
import { useEffect, useState } from "react";
import { amplitude } from "./AnalyticsProvider";
const LandingWithVideo = ({ video }: { video: typeof vid }) => {
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [postSignupModalOpen, setPostSignupModalOpen] = useState(false);
  useEffect(() => {
    amplitude.track("Landing Page viewed", {
      path: window.location.pathname,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:justify-start gap-4 w-full z-20 relative h-screen mx-auto">
      {/* <h1
        className={cn(
          advercaseBold.className,
          "text-4xl w-full text-(--accent) drop-shadow-[0_0_2px_var(--accent)] tracking-wider text-center"
        )}
      >
        LCA
      </h1> */}
      <div className="w-full md:w-1/2 relative">
        <Video src={video} autoPlay loop className="w-full h-full mb-24" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <div className={cn(advercaseBold.className, "text-xl mt-4 md:mt-0")}>
          Join our
        </div>
        <div
          className={cn(
            advercaseBold.className,
            "text-4xl text-(--accent) drop-shadow-[0_0_2px_var(--accent)]"
          )}
        >
          90 Day Launch
        </div>
        <div className={cn(advercaseBold.className, "text-xl")}>Community</div>
        <Signup
          hasSubscribed={hasSubscribed}
          setHasSubscribed={setHasSubscribed}
          setPostSignupModalOpen={setPostSignupModalOpen}
        />
      </div>
      <PostSignupModal
        open={postSignupModalOpen}
        setOpen={setPostSignupModalOpen}
      />
    </div>
  );
};

export { LandingWithVideo };
