import { Container } from "@/shared/components/ui/container";
import { FeatureCard } from "@/shared/components/ui/FeatureCard";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons, type RemixIconName } from "@/shared/constants/icons";
import { useGSAP, fadeInUp } from "@/shared/hooks/useGSAP";

const FeaturesGrid = () => {
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
            Powerful Features
          </Text>
          <Text color='secondary'>
            Discover how our platform revolutionizes the way you do business
          </Text>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          <FeatureCard
            title='Payment'
            description='Safe and secure checkout, powered by end-to-end encryption and trusted payment partners.'
            icon={RemixIcons.securePayment as RemixIconName}
            buttonText='Read more'
            buttonLink='/payment'
            index={0}
          />
          <FeatureCard
            title='Logistics'
            description='Fast and reliable delivery with pre-set logistics integrations making order fulfillment seamless for both vendors and customers.'
            icon={RemixIcons.truck as RemixIconName}
            buttonText='Read more'
            buttonLink='/logistics'
            index={1}
          />
        </div>
      </Container>
    </Section>
  );
};

export { FeaturesGrid };
