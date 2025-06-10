import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const VeskoSection = () => {
  return (
    <Section>
      <Container>
        {/* <SplitterWithText /> */}
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          <div>
            <Image
              src={Assets.safePlace}
              className='mb-6 h-[30rem] rounded-md object-contain md:h-[20rem] lg:h-[30rem]'
              alt='Vesko safe place'
            />
            <Text variant='title'>Safe Place</Text>
            <Text>
              To share your life with friends and family without being attacked for who you are.
            </Text>
          </div>
          <div>
            <Image
              src={Assets.neutral}
              className='mb-6 h-[30rem] rounded-md object-contain md:h-[22rem] lg:h-[32rem]'
              alt='Vesko safe place'
            />
            <Text variant='title'>Neutral</Text>
            <Text>
              Like Switzerland, we take no sides and with zero tolerance for hate, bullying, &
              discrimination.
            </Text>
          </div>
          <div>
            <Image
              src={Assets.connected}
              className='mb-6 h-[30rem] rounded-md object-contain md:h-[20rem] lg:h-[30rem]'
              alt='Vesko safe place'
            />
            <Text variant='title'>Connected</Text>
            <Text>
              Your feed doesn’t just show people, It shows what your local stores sell, bringing
              your online life closer to your real world.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
};

VeskoSection.displayName = "VeskoSection";

export { VeskoSection };
