import { CTASection } from "@/features/for-online-vendor/CTASection";
import { FeaturesSection } from "@/features/for-online-vendor/FeaturesSection";
import { HeroSection } from "@/features/for-online-vendor/HeroSection";
import { HowVeskosWorkSection } from "@/features/for-online-vendor/HowVeskosWorkSection";
import { OrderSection } from "@/features/for-online-vendor/OrderSection";
import { StartupsSection } from "@/features/for-online-vendor/StartupsSection";
import { ValueProbSection } from "@/features/for-online-vendor/ValueProbSection";
import { WhatIsSection } from "@/features/for-online-vendor/WhatIsSection";

const ForOnlineVendorPage = () => {
  return (
    <div className='relative -top-18'>
      <HeroSection />
      <ValueProbSection />
      <WhatIsSection />
      <StartupsSection />
      <HowVeskosWorkSection />
      <FeaturesSection />
      <OrderSection />
      <CTASection />
    </div>
  );
};

export default ForOnlineVendorPage;
