import { HeroSection } from "@/features/about/HeroSection";
import { OurStorySection } from "@/features/about/OurStorySection";
import { OurValuesSection } from "@/features/about/OurValuesSection";
import { UNSDGsSection } from "@/features/about/UNSDGsSection";
import { WhatIsVeskoSection } from "@/features/about/WhatIsVeskoSection";
import { WhySection } from "@/features/about/WhySection";

const AboutPage = () => {
  return (
    <div className='relative -top-18'>
      <HeroSection />
      <WhatIsVeskoSection />
      <WhySection />
      <OurStorySection />
      <OurValuesSection />
      <UNSDGsSection />
    </div>
  );
};

export default AboutPage;
