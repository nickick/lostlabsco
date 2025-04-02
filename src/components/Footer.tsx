import { cn } from "@/utils/cn";
import { hostGroteskRegular } from "@/app/font";
const Footer = () => {
  return (
    <footer
      className={cn(
        hostGroteskRegular.className,
        "row-start-3 flex gap-6 flex-wrap items-center justify-center py-8"
      )}
    >
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} Lost Labs Co. All rights reserved.
      </p>
    </footer>
  );
};

export { Footer };
