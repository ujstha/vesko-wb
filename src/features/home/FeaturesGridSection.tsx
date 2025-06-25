import { useTranslation } from "react-i18next";

import { FeatureCard } from "@/shared/components/common/FeatureCard";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons, type RemixIconName } from "@/shared/constants/icons";
import { useGSAP, fadeInUp } from "@/shared/hooks/useGSAP";

const FeaturesGridSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGSAP<HTMLDivElement>();

  return (
    <Section ref={sectionRef} className='relative py-32' aria-labelledby='features-heading'>
      <Container>
        <div
          className='mb-16 text-center'
          id='features-heading'
          data-gsap={JSON.stringify(fadeInUp)}
        >
          <Text as='h2' variant='heading' className='mb-4'>
            {t("home.featuresGrid.heading")}
          </Text>
          <Text color='secondary'>{t("home.featuresGrid.subtitle")}</Text>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          <FeatureCard
            title={t("home.featuresGrid.payment.title")}
            description={t("home.featuresGrid.payment.description")}
            icon={RemixIcons.securePayment as RemixIconName}
            buttonText={t("home.featuresGrid.payment.buttonText")}
            buttonLink='/payment'
            index={0}
          />
          <FeatureCard
            title={t("home.featuresGrid.logistics.title")}
            description={t("home.featuresGrid.logistics.description")}
            icon={RemixIcons.truck as RemixIconName}
            buttonText={t("home.featuresGrid.logistics.buttonText")}
            buttonLink='/logistics'
            index={1}
          />
        </div>
      </Container>
    </Section>
  );
};

export { FeaturesGridSection };
