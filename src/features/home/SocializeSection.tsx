import { useTranslation } from "react-i18next";

import { StackScrollCards } from "@/shared/components/ui/animated/StackScrollCards";
import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const SocializeSection = () => {
  const { t } = useTranslation();

  const blocks = [
    {
      id: 1,
      color: "bg-green-50",
      title: t("home.socialize.blocks.localLife.title"),
      description: t("home.socialize.blocks.localLife.description"),
      image: Assets.spaceDigital,
    },
    {
      id: 2,
      color: "bg-blue-50",
      title: t("home.socialize.blocks.growBusiness.title"),
      description: t("home.socialize.blocks.growBusiness.description"),
      image: Assets.spaceDigital,
    },
  ];

  return (
    <Section className='p-0'>
      <Container className='p-0'>
        <Text variant='subheading' as='h2' className='mb-6 text-center'>
          {t("home.socialize.heading")}
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
