"use client";

import { advercaseRegular } from "@/app/font";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { Spinner } from "./Spinner";

const Signup = () => {
  //set up state to hold email and response
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>();
  const [subcriptionResponse, setSubcriptionResponse] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(undefined);
    setSubcriptionResponse(undefined);
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
      if (response.ok) {
        const signup = await response.json();

        setEmail("");
        setSubcriptionResponse(signup.message);
      } else {
        if (response.status === 400) {
          if (response.statusText === "Member Exists") {
            setError("You've already subscribed!");
          }
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
    <div className="w-full flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col">
        {error && (
          <p className="text-red-500 text-center mb-2 w-full">{error}</p>
        )}
        {subcriptionResponse && (
          <p className="text-green-500 text-center mb-2 w-full">
            {subcriptionResponse}
          </p>
        )}
        {!subcriptionResponse && !error && <div className="h-6"></div>}
        <input
          type="email"
          value={email}
          required
          name="email_address"
          onChange={(e) => setEmail(e.target.value)}
          className="w-84 sm:w-96 mx-auto border-2 border-gray-300 rounded-tl-md rounded-tr-md p-2 bg-white text-gray-900 text-center"
          placeholder="Enter your email"
        />

        <button
          type="submit"
          disabled={email === "" || isLoading}
          className={cn(
            "w-84 sm:w-96 md:mx-auto bg-[#ffd804] text-black rounded-bl-md rounded-br-md py-3 px-4 flex gap-2 items-center justify-center cursor-pointer hover:bg-[#ffd804]/90 disabled:opacity-90 transition-all disabled:cursor-not-allowed",
            advercaseRegular.className
          )}
        >
          {subcriptionResponse
            ? "Thank you!"
            : "Join the 90 Day Launch Community"}
          {isLoading && <Spinner className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
};

export default Signup;
