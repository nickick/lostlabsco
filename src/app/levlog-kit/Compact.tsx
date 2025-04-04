import { cn } from "@/utils/cn";
import { advercaseBold, hostGroteskRegular } from "../font";
import { HighlightedSpan } from "@/components/Text";
import Image from "next/image";

function Compact() {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 w-full max-w-screen-lg md:mx-auto px-8",
        hostGroteskRegular.className
      )}
      id="compact"
    >
      <h2
        className={cn(
          advercaseBold.className,
          "text-3xl drop-shadow-[0_0_2px_var(--accent)]"
        )}
      >
        A <span className="text-(--accent)">Compact</span> Vlogging Kit
      </h2>
      <div className={cn("flex flex-col items-center justify-center")}>
        <p className="text-lg">
          The LeVlog kit is designed compact so that it can{" "}
          <HighlightedSpan className="text-base">
            stay on your phone
          </HighlightedSpan>{" "}
          and{" "}
          <HighlightedSpan className="text-base">
            fit in your pocket
          </HighlightedSpan>
          .
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 md:py-8">
        <div className="relative rounded-lg overflow-hidden w-full md:w-1/2">
          <Image
            src="/vlog/renders/flat.png"
            alt="Compact LeVlog Kit"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-col gap-2">
            <h3 className={cn(advercaseBold.className, "text-2xl")}>
              7mm thin
            </h3>
            <p className="">
              We're using high-grade aluminum to keep the LeVlog kit thin and
              light yet strong. At just 7mm thin, you won't even notice it's
              there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Compact };
