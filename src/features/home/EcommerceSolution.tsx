import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const EcommerceSolution = () => {
  return (
    <Section>
      <Container>
        <Text variant='heading' className='mb-10 text-center md:mb-16' as='h2'>
          Our E-commerce Solutions
        </Text>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='overflow-hidden rounded-xl border border-neutral-200 bg-white'>
            <Image src={Assets.omnistore} alt='OmniStore' className='h-[25rem]' />
            <div className='p-6'>
              <Text variant='subheading' as='h3'>
                OmniStore ®
              </Text>
              <Text variant='subtitle' weight='normal'>
                For brick-and-mortar retailers
              </Text>
              <Text className='mt-4'>
                Transform your physical store into a virtual showroom. Sell from the same inventory
                both online and offline, and connect with digitally-driven walk-in customers.
              </Text>
            </div>
          </div>
          <div className='overflow-hidden rounded-xl border border-neutral-200 bg-white'>
            <Image src={Assets.onlinestore} alt='Online' className='h-[25rem]' />
            <div className='p-6'>
              <Text variant='subheading' as='h3'>
                Online Store
              </Text>
              <Text variant='subtitle' weight='normal'>
                For Online vendors
              </Text>
              <Text className='mt-4'>
                For digital-first vendors. Build your brand, grow a loyal customer base, and connect
                directly with your audience, all within a supportive, social commerce platform.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

EcommerceSolution.displayName = "EcommerceSolution";

export { EcommerceSolution };
