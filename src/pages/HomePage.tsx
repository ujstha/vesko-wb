import { EcommerceSolution } from "@/features/home/EcommerceSolution";
import { FeaturesSection } from "@/features/home/FeaturesSection";
import { HeroSection } from "@/features/home/HeroSection";
import { MiddleHeroSection } from "@/features/home/MiddleHeroSection";
import { SocializeSection } from "@/features/home/SocializeSection";
import { VeskoSection } from "@/features/home/VeskoSection";
import { FeaturesGrid } from "@/features/home/FeaturesGrid";
import { UnboxingVideo } from "@/features/home/UnboxingVideo";
import { ReviewsCarousel } from "@/features/home/ReviewsCarousel";
import { CTASection } from "@/features/home/CTASection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <MiddleHeroSection />
      <VeskoSection />
      <SocializeSection />
      <EcommerceSolution />
      <FeaturesGrid />
      <UnboxingVideo />
      <CTASection />
    </>
  );
};

export default HomePage;
