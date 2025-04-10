import { Hero } from "@/components/Hero";
import NavbarFooter from "@/components/Layouts/NavbarFooter";

export default function Home() {
  return (
    <NavbarFooter>
      <main className="w-full max-w-screen-xl mx-auto px-4 relative">
        <Hero />
      </main>
    </NavbarFooter>
  );
}
