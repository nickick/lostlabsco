import ReserveButton from "@/components/ReserveButton";
import { advercaseBold } from "../font";
import { cn } from "@/utils/cn";
import NavbarFooter from "@/components/Layouts/NavbarFooter";

export default function Reserve() {
  return (
    <NavbarFooter theme="dark">
      <div className="flex flex-col items-center justify-center h-screen max-w-screen-xl mx-auto px-8 relative z-20">
        <div>
          <h1
            className={cn(
              advercaseBold.className,
              "text-4xl w-full text-(--accent) drop-shadow-[0_0_2px_var(--accent)] tracking-wider text-center"
            )}
          >
            Reserve your spot
          </h1>
          <p>Reserve your spot:</p>
          <div className="flex flex-col items-center justify-center">
            <ReserveButton buttonText="Reserve now" />
          </div>
        </div>
      </div>
    </NavbarFooter>
  );
}
