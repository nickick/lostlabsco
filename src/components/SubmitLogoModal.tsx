"use client";

import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { useLocalStorage } from "usehooks-ts";
import Signup from "./Signup";
import { cn } from "@/utils/cn";

function SubmitLogoModal({
  button,
  onSubmit,
}: {
  button: React.ReactNode;
  onSubmit: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [signedEmail] = useLocalStorage("signed-up-email", "");
  const [name, setName] = useState("");
  const [signedName, setSignedName] = useLocalStorage("signed-up-name", "");
  const [hasSubscribed, setHasSubscribed] = useState(false);

  useEffect(() => {
    if (signedEmail && !hasSubscribed) {
      setHasSubscribed(true);
    }
  }, [signedEmail, hasSubscribed]);

  useEffect(() => {
    if (signedName && signedEmail) {
      setOpen(false);
    }
  }, [signedName, signedEmail]);

  const handleOpen = () => {
    if (signedEmail && signedName) {
      setOpen(false);
      onSubmit();
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div onClick={handleOpen}>{button}</div>
      <Modal open={open} setOpen={setOpen}>
        {!signedEmail && (
          <div className="flex flex-col gap-0 justify-center items-center mb-4">
            <h2 className="">
              Sign up for our newsletter to submit a logo design.
            </h2>
            <Signup
              hasSubscribed={hasSubscribed}
              setHasSubscribed={setHasSubscribed}
            />
          </div>
        )}
        {signedEmail && !signedName && (
          <div className="flex flex-col gap-4 justify-center items-center mb-4">
            Last step: what&apos;s your name/social handle? We&apos;ll give you
            a shout out if we pick your logo!
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSignedName(name);
                setOpen(false);
                onSubmit();
              }}
            >
              <input
                type="text"
                placeholder="@username"
                className="w-84 sm:w-96 mx-auto border-2 border-gray-300 rounded-tl-md rounded-tr-md p-2 bg-white text-gray-900"
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="submit"
                className={cn(
                  "w-84 sm:w-96 mx-auto rounded-bl-md rounded-br-md py-3 px-4 flex gap-2 items-center justify-center cursor-pointer  disabled:opacity-90 transition-all disabled:cursor-not-allowed",
                  "bg-(--accent) text-black hover:bg-[#ffd804]/90"
                )}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </Modal>
    </>
  );
}

export { SubmitLogoModal };
