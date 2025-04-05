/**
 * NOTE: Should not use this within the Signup component, as we don't want to show this
 * in the submitting a drawing flow.
 */

import Link from "next/link";
import { Modal } from "./Modal";
import { WAQRCodeChip } from "./WAQRCodeChip";
import Video from "next-video";
import Instaplay from "player.style/instaplay/react";
import welcome from "/videos/welcome.mp4";

export const PostSignupModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex flex-col items-start justify-center gap-0 relative">
        <div className="text-lg font-bold pt-4 text-center w-full">
          Thanks for joining!
        </div>
        <div className="relative w-48 h-96 mx-auto">
          <Video
            src={welcome}
            autoPlay
            loop
            className="w-48 h-96"
            theme={Instaplay}
          />
        </div>
        <div className="text-lg font-bold pt-6">Next steps:</div>
        <div className="flex items-center gap-2">
          <div className="relative top-2">1.</div> <WAQRCodeChip />
        </div>
        <div className="pt-2">
          2.{" "}
          <Link
            href="/submit"
            target="_blank"
            className="underline text-(--accent) hover:text-(--accent)/90 transition-colors duration-300"
          >
            Design a logo
          </Link>{" "}
          with us
        </div>
      </div>
    </Modal>
  );
};
