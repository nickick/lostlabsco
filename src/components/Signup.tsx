"use client";

import { advercaseRegular } from "@/app/font";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { useLocalStorage } from "usehooks-ts";
import { amplitude } from "./AnalyticsProvider";

const Signup = ({
  hasSubscribed,
  setHasSubscribed,
}: {
  hasSubscribed: boolean;
  setHasSubscribed: (hasSubscribed: boolean) => void;
}) => {
  //set up state to hold email and response
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [signedEmail, setSignedEmail] = useLocalStorage("signed-up-email", "");

  useEffect(() => {
    if (signedEmail && !hasSubscribed) {
      setHasSubscribed(true);
    }
  }, [signedEmail, hasSubscribed]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(undefined);
    setIsLoading(true);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      });
      if (response.ok && response.statusText !== "Member Exists") {
        setHasSubscribed(true);
        setSignedEmail(email);
        setEmail("");
        amplitude.track("signup", { email });
      } else {
        if (response.statusText === "Member Exists") {
          setSignedEmail(email);
          setError("You've already subscribed!");
        } else if (response.status === 400) {
          setError("An error occurred, please try again.");
        }
      }
      /* eslint-disable  @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full flex flex-col gap-4 justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col">
        {error && (
          <p className="w-84 sm:w-96 mx-auto text-left text-red-500 mb-2">
            {error}
          </p>
        )}
        {!error && <div className="h-6"></div>}
        {!hasSubscribed && (
          <input
            type="email"
            value={email}
            required
            name="email_address"
            onChange={(e) => setEmail(e.target.value)}
            className="w-84 sm:w-96 mx-auto border-2 border-gray-300 rounded-tl-md rounded-tr-md p-2 bg-white text-gray-900"
            placeholder="Enter your email"
          />
        )}

        <button
          type="submit"
          disabled={email === "" || isLoading || hasSubscribed}
          className={cn(
            "w-84 sm:w-96 mx-auto rounded-bl-md rounded-br-md py-3 px-4 flex gap-2 items-center justify-center cursor-pointer  disabled:opacity-90 transition-all disabled:cursor-not-allowed",
            hasSubscribed && "rounded-md border-(--accent) border-2 text-white",
            !hasSubscribed && "bg-(--accent) text-black hover:bg-[#ffd804]/90",
            advercaseRegular.className
          )}
        >
          {hasSubscribed ? "Thanks for joining!" : "Join the community"}
          {isLoading && <Spinner className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
};

export default Signup;
