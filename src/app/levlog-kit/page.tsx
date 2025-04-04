import { Compact } from "./Compact";
import { LeVlogHero } from "./Hero";
import Versatile from "./Versatile";

export default function LevlogKit() {
  return (
    <div className="flex flex-col gap-12">
      <LeVlogHero />
      <Versatile />
      <Compact />
    </div>
  );
}
