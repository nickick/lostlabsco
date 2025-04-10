import { advercaseRegular } from "@/app/font";
import { cn } from "@/utils/cn";
import Link from "next/link";

const HighlightedLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="text-(--accent) hover:text-(--accent)/90 drop-shadow-[0_0_1px_var(--accent)] underline"
      target="_blank"
    >
      {children}
    </Link>
  );
};

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
        "dark:text-(--accent) dark:drop-shadow-[0_0_1px_var(--accent)]",
        className
      )}
    >
      {children}
    </span>
  );
};

export { HighlightedLink, HighlightedSpan };
