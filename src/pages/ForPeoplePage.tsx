import { HeroSection } from "@/features/for-people/HeroSection";
import { RealMeetDigitalSection } from "@/features/for-people/RealMeetDigitalSection";
import { VeskoIsSection } from "@/features/for-people/VeskoIsSection";
import { WhatIsVeskoSection } from "@/features/for-people/WhatIsVeskoSection";
import { CTASection } from "@/shared/components/common/CTASection";

const ForPeoplePage = () => {
  return (
    <div className='relative -top-18 h-full'>
      <HeroSection />
      <WhatIsVeskoSection />
      <VeskoIsSection />
      <RealMeetDigitalSection />
      <CTASection />
    </div>
  );
};

export default ForPeoplePage;
