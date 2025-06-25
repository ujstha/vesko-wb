import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const HeroSection = () => {
  return (
    <Section
      className='min-h-screen items-center bg-cover bg-center px-4 py-32 xl:flex'
      style={{ backgroundImage: `url(${Assets.aboutHero})` }}
    >
      <div className='absolute inset-0 grid place-items-center bg-gradient-to-t from-black/80 via-black/70 to-transparent'>
        <Container className='text-center'>
          <Text as='h1' variant='heading' className='lg:text-6xl' color='primaryLight'>
            About Vesko
          </Text>
          <Text variant='title' className='mt-4 font-normal lg:text-3xl' color='primaryLight'>
            Read why we&apos;re building Vesko, and get to know something about us
          </Text>
        </Container>
      </div>
    </Section>
  );
};

export { HeroSection };
