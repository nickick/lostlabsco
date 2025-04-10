import { LandingWithVideo } from "@/components/LandingWithVideo";
import LCAVideo from "/videos/lca-intro.mp4";
import NavbarFooter from "@/components/Layouts/NavbarFooter";

export default function LCA() {
  return (
    <NavbarFooter theme="dark">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto px-8">
        <LandingWithVideo video={LCAVideo} />
      </div>
    </NavbarFooter>
  );
}
