import { PublicHero } from "@/components/public-site/hero";
import { PublicFeatures } from "@/components/public-site/features";
import { PublicPhilosophy } from "@/components/public-site/philosophy";
import { PublicSupplements } from "@/components/public-site/supplements";
import { PublicTestimonials } from "@/components/public-site/testimonials";

export default function Home() {
  return (
    <>
      <PublicHero />
      <PublicFeatures />
      <PublicPhilosophy />
      <PublicSupplements />
      <div className="bg-surface-container-lowest">
        <PublicTestimonials />
      </div>
    </>
  );
}
