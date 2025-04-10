import { cn } from "@/utils/cn";
import { advercaseBold, hostGroteskRegular } from "@/app/font";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center max-w-screen-xl mx-auto py-8 relative z-20">
      <div className="px-8">
        <Link
          className={cn(
            "text-center text-sm dark:text-(--accent)",
            advercaseBold.className
          )}
          href="/"
        >
          <span className="font-bold text-2xl dark:drop-shadow-[0_0_1px_var(--accent)] light:drop-shadow-[0_0_1px_rgb(0,0,0)] whitespace-nowrap">
            Lost Labs
          </span>
        </Link>
      </div>
      <div className={cn("flex px-8 gap-4", hostGroteskRegular.className)}>
        <Link
          href="/submit"
          className="hover:text-(--accent) hover:underline transition-colors whitespace-nowrap"
        >
          Submit Logo
        </Link>
        <Link
          href="/product"
          className="dark:text-(--accent) light:drop-shadow-[0_0_5px_var(--foreground)] hover:text-(--accent)/90 hover:underline transition-colors whitespace-nowrap"
        >
          Product
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
