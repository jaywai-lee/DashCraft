import { LandingFeatures } from "@/widgets/landing/ui/LandingFeatures";
import { LandingFooter } from "@/widgets/landing/ui/LandingFooter";
import { LandingHeader } from "@/widgets/landing/ui/LandingHeader";
import { LandingHero } from "@/widgets/landing/ui/LandingHero";
import { LandingPreview } from "@/widgets/landing/ui/LandingPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <LandingHeader />

      <main className="flex-1 w-full flex flex-col items-center px-6">
        <LandingHero />
        <LandingPreview />
        <LandingFeatures />
      </main>

      <LandingFooter />
    </div>
  );
}
