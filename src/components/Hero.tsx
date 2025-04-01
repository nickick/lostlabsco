import {
  advercaseBold,
  advercaseRegular,
  hostGroteskRegular,
} from "@/app/font";
import { cn } from "@/utils/cn";
import Signup from "./Signup";

const HighlightedSpan = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className={cn(advercaseRegular.className, "text-(--accent)")}>
      {children}
    </span>
  );
};

const Hero = () => {
  return (
    <div className="min-h-[calc(100svh-8rem)] flex flex-col gap-4 row-start-2 items-center justify-center sm:items-start">
      <h1
        className={cn(
          advercaseBold.className,
          "font-bold flex flex-col items-center w-full"
        )}
      >
        <span className="text-3xl">Join our</span>
        <span className="text-[3rem] text-(--accent) drop-shadow-[0_0_3px_var(--accent)]">
          90 Day Launch
        </span>
        <span className="text-3xl">Newsletter</span>
      </h1>
      <div
        className={cn(
          hostGroteskRegular.className,
          "flex flex-col gap-4 w-full md:w-1/2 mx-auto"
        )}
      >
        <p>
          <HighlightedSpan>Million or Bust Challenge</HighlightedSpan>: invent a
          new hardware product, sell{" "}
          <HighlightedSpan>$1 MILLION</HighlightedSpan> in preorders, and ship
          to customers, <HighlightedSpan>all in 90 days</HighlightedSpan>.
        </p>
        <p>
          If you&apos;re an entrepreneur, aspiring to be one, or just excited to
          watch a business get launched FAST, we made our 90 Day Launch
          newsletter for you. We&apos;ll be sharing behind-the-scenes updates,
          guides and more.
        </p>
      </div>
      <Signup />
    </div>
  );
};

export { Hero };
