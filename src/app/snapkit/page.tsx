import { Compact } from "./Compact";
import { ProductHero } from "./Hero";
import Versatile from "./Versatile";
import { Customizable } from "./Customizable";
import { CTABottom } from "./CTABottom";
import NavbarFooter from "@/components/Layouts/NavbarFooter";

export default function SnapKit() {
  return (
    <NavbarFooter theme="light">
      <div className="flex flex-col gap-12">
        <ProductHero />
        <Versatile />
        <Customizable />
        <Compact />
        <CTABottom />
      </div>
    </NavbarFooter>
  );
}
