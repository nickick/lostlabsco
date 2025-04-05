import { Compact } from "../levlog-kit/Compact";
import { LeVlogHero } from "../levlog-kit/Hero";
import Versatile from "../levlog-kit/Versatile";
import { Customizable } from "../levlog-kit/Customizable";
import { CTABottom } from "../levlog-kit/CTABottom";
export default function Product() {
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
