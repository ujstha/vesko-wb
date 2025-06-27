import { BenefitsSection } from "@/features/for-offline-vendor/BenefitsSection";
import { FeaturesSection } from "@/features/for-offline-vendor/FeaturesSection";
import { HeroSection } from "@/features/for-offline-vendor/HeroSection";
import { HowVeskosWorkSection } from "@/features/for-offline-vendor/HowVeskosWorkSection";
import { OmniStoreBenefitSection } from "@/features/for-offline-vendor/OmniStoreBenefitSection";
import { OrderSection } from "@/features/for-offline-vendor/OrderSection";
import { POSSection } from "@/features/for-offline-vendor/POSSection";
import { WhatIsOmniStoreSection } from "@/features/for-offline-vendor/WhatIsOmniStoreSection";
import { WhySection } from "@/features/for-offline-vendor/WhySection";

const ForOfflineVendorPage = () => {
  return (
    <div className='relative -top-18'>
      <HeroSection />
      <OmniStoreBenefitSection />
      <WhatIsOmniStoreSection />
      <WhySection />
      <BenefitsSection />
      <HowVeskosWorkSection />
      <FeaturesSection />
      <OrderSection />
      <POSSection />
    </div>
  );
};

export default ForOfflineVendorPage;
