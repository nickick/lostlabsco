import { Compact } from "../snapkit/Compact";
import { ProductHero } from "../snapkit/Hero";
import Versatile from "../snapkit/Versatile";
import { Customizable } from "../snapkit/Customizable";
import { CTABottom } from "../snapkit/CTABottom";
import NavbarFooter from "@/components/Layouts/NavbarFooter";
export default function Product() {
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
