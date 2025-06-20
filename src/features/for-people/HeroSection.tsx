import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const HeroSection = () => {
  return (
    <Section
      className='-top-18 hidden min-h-screen items-center bg-cover px-4 py-32 xl:flex'
      style={{ backgroundImage: `url(${Assets.forPeopleHero})` }}
    >
      <div className='absolute inset-x-0 bottom-0 z-10 grid h-1/3 place-items-center bg-gradient-to-t from-white/20 via-white/10 to-transparent backdrop-blur-xs'>
        <Container className='flex items-center justify-between'>
          <Text as='h1' variant='heading' color='primaryLight'>
            People
            <br />
            Connected
          </Text>
          <div className='max-w-sm'>
            <Text color='primaryLight' className='!text-xl'>
              Not scroll. Not chase. Just connect with people, places, and your local world.
            </Text>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export { HeroSection };
