import { Footer } from "../Footer";
import { LeavesBackground } from "../LeavesBackground";
import { Navbar } from "../Navbar";

const NavbarFooter = ({
  children,
  theme = "dark",
}: {
  children: React.ReactNode;
  theme?: "light" | "dark";
}) => {
  return (
    <div
      className="w-full h-full relative bg-(--background) text-(--foreground)"
      data-theme={theme}
    >
      <LeavesBackground />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default NavbarFooter;
