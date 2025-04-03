import { hostGroteskRegular } from "@/app/font";
import { cn } from "@/utils/cn";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className={cn(
        hostGroteskRegular.className,
        "row-start-3 flex flex-col md:flex-row md:gap-6 flex-wrap items-center justify-center py-8 relative z-20"
      )}
    >
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} Lost Labs Co. All rights reserved.
      </p>
      <p className="text-sm">
        Made with{" "}
        <Link
          href="https://www.yesand.tech"
          className="underline cursor-pointer drop-shadow-[0_0_1px_rgb(255,255,255))] hover:text-white/90 transition-all"
          target="_blank"
        >
          YesAnd Technologies
        </Link>
      </p>
    </footer>
  );
};

export { Footer };
