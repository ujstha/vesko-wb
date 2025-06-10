import { EcommerceSolution } from "@/features/home/EcommerceSolution";
import { FeaturesSection } from "@/features/home/FeaturesSection";
import { HeroSection } from "@/features/home/HeroSection";
import { MiddleHeroSection } from "@/features/home/MiddleHeroSection";
import { SocializeSection } from "@/features/home/SocializeSection";
import { VeskoSection } from "@/features/home/VeskoSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <MiddleHeroSection />
      <VeskoSection />
      <SocializeSection />
      <EcommerceSolution />
    </>
  );
};

export default HomePage;
