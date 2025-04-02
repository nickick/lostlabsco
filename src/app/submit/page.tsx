"use client";

import { Canvas } from "@/components/Canvas";

const Submit = () => {
  return (
    <main className="w-full max-w-screen-xl mx-auto px-4 relative min-h-[calc(100svh-8rem)] flex flex-col gap-0 justify-center items-center">
      <div className="flex flex-col gap-0 row-start-2 items-center justify-center sm:items-start relative z-20 pb-12">
        <h1 className="text-4xl font-bold">Submit a Logo Design</h1>
        <p className="text-lg">
          We&apos;re looking for a logo design for our hardware business.
        </p>
      </div>
      <Canvas />
    </main>
  );
};

export default Submit;
