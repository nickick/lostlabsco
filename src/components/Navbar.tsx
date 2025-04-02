import { cn } from "@/utils/cn";
import { advercaseBold, hostGroteskRegular } from "@/app/font";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center max-w-screen-xl mx-auto py-8">
      <div className="px-8">
        <Link
          className={cn(
            "text-center text-sm text-(--accent)",
            advercaseBold.className
          )}
          href="/"
        >
          <span className="font-bold text-2xl drop-shadow-[0_0_1px_var(--accent)]">
            Lost Labs
          </span>
        </Link>
      </div>
      <div className={cn("px-8", hostGroteskRegular.className)}>
        <Link href="/submit">Draw</Link>
      </div>
    </nav>
  );
};

export { Navbar };
