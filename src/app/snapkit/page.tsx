import { Compact } from "./Compact";
import { ProductHero } from "./Hero";
import Versatile from "./Versatile";
import { Customizable } from "./Customizable";
import { CTABottom } from "./CTABottom";

export default function SnapKit() {
  return (
    <div className="flex flex-col gap-12">
      <ProductHero />
      <Versatile />
      <Customizable />
      <Compact />
      <CTABottom />
    </div>
  );
}
