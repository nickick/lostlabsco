import { advercaseRegular } from "@/app/font";
import { cn } from "@/utils/cn";

const HighlightedSpan = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        advercaseRegular.className,
        "text-(--accent) drop-shadow-[0_0_1px_var(--accent)]",
        className
      )}
    >
      {children}
    </span>
  );
};

export { HighlightedSpan };
