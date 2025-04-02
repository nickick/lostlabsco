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
      className={cn(
        "absolute inset-0 w-full h-full mix-blend-lighten",
        className
      )}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maskImage:
          "radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 20%, transparent 60%, transparent 100%);",
      }}
    />
  );
}

export { BackgroundLeaves };
