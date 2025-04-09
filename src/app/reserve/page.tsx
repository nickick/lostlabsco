import { advercaseBold } from "@/app/font";
import ReserveButton from "@/components/ReserveButton";
import { cn } from "@/utils/cn";

export default function Reserve() {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-screen-xl mx-auto px-8 relative z-20">
      <div>
        Coming soon!
        {/* <h1
          className={cn(
            advercaseBold.className,
            "text-4xl w-full text-(--accent) drop-shadow-[0_0_2px_var(--accent)] tracking-wider text-center"
          )}
        >
          Reserve your spot
        </h1>
        <p>For $1, you can reserve your spot:</p>
        <div className="flex flex-col items-center justify-center">
          <ReserveButton buttonText="Reserve now" />
        </div> */}
      </div>
    </div>
  );
}
