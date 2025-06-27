import { EcommerceSolution } from "@/features/home/EcommerceSolution";
import { FeaturesGridSection } from "@/features/home/FeaturesGridSection";
import { FeaturesSection } from "@/features/home/FeaturesSection";
import { HeroSection } from "@/features/home/HeroSection";
import { MiddleHeroSection } from "@/features/home/MiddleHeroSection";
import { SocializeSection } from "@/features/home/SocializeSection";
import { UnboxingVideo } from "@/features/home/UnboxingVideo";
import { VeskoSection } from "@/features/home/VeskoSection";
import { CTASection } from "@/shared/components/common/CTASection";

const HomePage = () => {
  return (
    <div className='relative -top-18'>
      <HeroSection />
      <FeaturesSection />
      <MiddleHeroSection />
      <VeskoSection />
      <SocializeSection />
      <EcommerceSolution />
      <FeaturesGridSection />
      <UnboxingVideo />
      <CTASection />
    </div>
  );
};

export default HomePage;
