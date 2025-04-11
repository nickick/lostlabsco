import { advercaseBold, hostGroteskRegular } from "@/app/font";
import { cn } from "@/utils/cn";

const Navbar = () => {
  return (
    <nav className="w-full relative z-20 light:bg-white dark:bg-background drop-shadow-md">
      <div className="max-w-screen-xl mx-auto py-8 px-8 flex justify-between items-center w-full">
        <div className="">
          <a
            className={cn(
              "text-center text-sm text-(--accent)",
              advercaseBold.className
            )}
            href="/"
          >
            <span className="font-bold text-2xl dark:drop-shadow-[0_0_1px_var(--accent)] whitespace-nowrap">
              Lost Labs
            </span>
          </a>
        </div>
        <div className={cn("flex gap-4", hostGroteskRegular.className)}>
          <a
            href="/submit"
            className="hover:text-(--accent) hover:underline transition-colors whitespace-nowrap"
          >
            Submit Logo
          </a>
          <a
            href="/product"
            className="dark:text-(--accent) hover:text-(--accent)/90 hover:underline transition-colors whitespace-nowrap"
          >
            Product
          </a>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
