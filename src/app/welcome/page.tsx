import { LandingWithVideo } from "@/components/LandingWithVideo";
import WelcomeVideo from "/videos/email-welcome.mp4";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto px-8">
      <LandingWithVideo video={WelcomeVideo} />
    </div>
  );
}
