import { BackgroundLeaves } from "./BackgroundLeaves";
import { cn } from "@/utils/cn";
const LeavesBackground = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "hidden md:block absolute h-screen w-full overflow-hidden",
        className
      )}
    >
      <BackgroundLeaves
        imgSrc="/dark-leaves-2.jpg"
        className="hidden sm:block opacity-20 top-0 left-1/4 -translate-x-1/2  w-3/4 h-full rotate-[300deg]"
        initial={{ opacity: 0, left: "25%", top: "0%" }}
        animate={{ opacity: 0.2, left: "25%", top: "0%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <BackgroundLeaves
        imgSrc="/dark-leaves-2.jpg"
        className="hidden sm:block opacity-20 top-0 left-3/4 -translate-x-1/2  w-3/4 h-full scale-y-[-1] rotate-[240deg]"
        initial={{ opacity: 0, left: "75%", top: "0%" }}
        animate={{ opacity: 0.2, left: "75%", top: "0%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </div>
  );
};

export { LeavesBackground };
