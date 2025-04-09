import { LandingWithVideo } from "@/components/LandingWithVideo";
import LCAVideo from "/videos/lca-intro.mp4";

export default function LCA() {
  return (
    <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto px-8">
      <LandingWithVideo video={LCAVideo} />
    </div>
  );
}
