"use client";

import { advercaseRegular, hostGroteskRegular } from "@/app/font";
import { Canvas } from "@/components/Canvas";
import NavbarFooter from "@/components/Layouts/NavbarFooter";
import { HighlightedSpan } from "@/components/Text";
import { cn } from "@/utils/cn";

const Submit = () => {
  return (
    <NavbarFooter theme="dark">
      <main
        className={cn(
          "w-full max-w-screen-xl mx-auto px-4 relative min-h-[calc(100svh-8rem)] flex flex-col gap-0 justify-center items-center font-sans pt-12 md:pt-0",
          hostGroteskRegular.className
        )}
      >
        <div className="flex flex-col gap-4 row-start-2 items-center justify-center sm:items-start relative z-20 pb-12">
          <h1
            className={cn(
              "text-4xl font-bold text-(--accent) w-full text-center drop-shadow-[0_0_2px_var(--accent)]",
              advercaseRegular.className
            )}
          >
            Submit a Logo Design
          </h1>
          <p className="text-lg px-8 sm:px-0">
            Build Lost Labs with us - submit a logo design and{" "}
            <HighlightedSpan className="text-sm">
              we might use it!
            </HighlightedSpan>
          </p>
          <div className="flex items-center gap-2">
            Design inspiration: <span className="text-4xl">🚀</span>
          </div>
        </div>
        <Canvas />
      </main>
    </NavbarFooter>
  );
};

export default Submit;
