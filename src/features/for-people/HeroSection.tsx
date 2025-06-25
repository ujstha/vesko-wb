import { WaitlistForm } from "@/shared/components/common/WaitlistForm";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const HeroSection = () => {
  return (
    <Section
      className='min-h-screen items-center bg-cover px-4 py-32 xl:flex'
      style={{ backgroundImage: `url(${Assets.forPeopleHero})` }}
    >
      <div className='absolute inset-x-0 bottom-0 z-10 grid place-items-center bg-gradient-to-t from-white/20 via-white/10 to-transparent backdrop-blur-xs'>
        <Container className='flex flex-col justify-between gap-4 px-4 py-16 xl:flex-row xl:items-center'>
          <Text as='h1' variant='heading' color='primaryLight' className='lg:text-6xl'>
            People
            <br />
            Connected
          </Text>
          <div>
            <div className='mb-8 max-w-sm'>
              <Text color='primaryLight' className='!text-xl'>
                Not scroll. Not chase. Just connect with people, places, and your local world.
              </Text>
            </div>
            <div className='max-w-md'>
              <WaitlistForm
                buttonText='Join the waitlist'
                placeholder='example@email.com'
                successMessage="You're on the list! We'll notify you when we launch."
              />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export { HeroSection };
