import { cn } from "@/utils/cn";

function BackgroundLeaves({
  className,
  imgSrc,
}: {
  className?: string;
  imgSrc: string;
}) {
  return (
    <div
      className={cn("absolute mix-blend-lighten", className)}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

export { BackgroundLeaves };
