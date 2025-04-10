import ReserveButton from "@/components/ReserveButton";
import { advercaseBold } from "../font";
import { cn } from "@/utils/cn";

export default function Reserve() {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-screen-xl mx-auto px-8 relative z-20">
      <div>
        <h1
          className={cn(
            advercaseBold.className,
            "text-4xl w-full text-(--accent) drop-shadow-[0_0_2px_var(--accent)] tracking-wider text-center"
          )}
        >
          Reserve your spot
        </h1>
        <p>For $20, you can reserve your spot:</p>
        <div className="flex flex-col items-center justify-center">
          <ReserveButton buttonText="Reserve now" />
        </div>
      </div>
    </div>
  );
}
