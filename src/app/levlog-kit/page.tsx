import { Compact } from "./Compact";
import { LeVlogHero } from "./Hero";
import Versatile from "./Versatile";
import { Customizable } from "./Customizable";
import { CTABottom } from "./CTABottom";
export default function LevlogKit() {
  return (
    <div className="flex flex-col gap-12">
      <LeVlogHero />
      <Versatile />
      <Customizable />
      <Compact />
      <CTABottom />
    </div>
  );
}
