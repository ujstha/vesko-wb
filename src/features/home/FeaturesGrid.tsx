import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { FeatureCard } from "@/shared/components/ui/FeatureCard";
import { PaymentIcon, LogisticsIcon } from "@/shared/components/ui/icons";

const FeaturesGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      ref={sectionRef}
      className='to-accent-900 min-h-screen bg-gradient-to-b from-black py-32'
      aria-labelledby='features-heading'
    >
      <Container>
        <div ref={headingRef} className='mb-16 text-center' id='features-heading'>
          <Text
            as='h2'
            variant='heading'
            className='mb-4 text-4xl font-bold text-white md:text-5xl'
          >
            Powerful Features
          </Text>
          <Text className='mx-auto max-w-2xl text-xl text-gray-300'>
            Discover how our platform revolutionizes the way you do business
          </Text>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          <FeatureCard
            title='Payment'
            description='Safe and secure checkout, powered by end-to-end encryption and trusted payment partners.'
            icon={<PaymentIcon className='h-10 w-10' />}
            buttonText='Read more'
            buttonLink='/payment'
            index={0}
          />
          <FeatureCard
            title='Logistics'
            description='Fast and reliable delivery with pre-set logistics integrations making order fulfillment seamless for both vendors and customers.'
            icon={<LogisticsIcon className='h-10 w-10' />}
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
