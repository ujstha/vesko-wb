import { StackScrollCards } from "@/shared/components/ui/animated/StackScrollCards";
import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const blocks = [
  {
    id: 1,
    color: "bg-green-50",
    title: "A space where your local life goes digital",
    description:
      "Follow nearby brands and stores, discover new products, and support your local businesses, all in one social feed.",
    image: Assets.spaceDigital,
  },
  {
    id: 2,
    color: "bg-blue-50",
    title: "Grow your business, expand your reach",
    description:
      "Build a community around your brand, or start your entrepreneurial journey right here on Vesko.",
    image: Assets.spaceDigital,
  },
];

const SocializeSection = () => {
  return (
    <Section className='p-0'>
      <Container className='p-0'>
        <Text variant='subheading' as='h2' className='mb-6 text-center'>
          Socialise, Share your life, Shop, & Sell all in one place
        </Text>

        <StackScrollCards
          items={blocks}
          gap={15}
          renderCard={(block) => (
            <div
              className={`${block.color} flex h-[500px] flex-col items-center justify-center rounded-lg px-2 py-20 text-center lg:h-full lg:px-10`}
            >
              <div className='mb-10 sm:max-w-2xl'>
                <Text variant='subheading' weight='normal' className='mb-2'>
                  {block.title}
                </Text>
                <Text className='sm:max-w-xl'>{block.description}</Text>
              </div>
              <div>
                <Image
                  src={block.image}
                  alt={block.title}
                  className='h-full w-[20rem] rounded-xl md:w-xl'
                />
              </div>
            </div>
          )}
        />
      </Container>
    </Section>
  );
};

SocializeSection.displayName = "SocializeSection";

export { SocializeSection };
