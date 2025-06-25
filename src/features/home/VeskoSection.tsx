import { useTranslation } from "react-i18next";
import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const VeskoSection = () => {
  const { t } = useTranslation();

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
            <Text variant='title'>{t("home.vesko.safePlace.title")}</Text>
            <Text>{t("home.vesko.safePlace.description")}</Text>
          </div>
          <div>
            <Image
              src={Assets.neutral}
              className='mb-6 h-[30rem] rounded-md object-contain md:h-[22rem] lg:h-[32rem]'
              alt='Vesko safe place'
            />
            <Text variant='title'>{t("home.vesko.neutral.title")}</Text>
            <Text>{t("home.vesko.neutral.description")}</Text>
          </div>
          <div>
            <Image
              src={Assets.connected}
              className='mb-6 h-[30rem] rounded-md object-contain md:h-[20rem] lg:h-[30rem]'
              alt='Vesko safe place'
            />
            <Text variant='title'>{t("home.vesko.connected.title")}</Text>
            <Text>{t("home.vesko.connected.description")}</Text>
          </div>
        </div>
      </Container>
    </Section>
  );
};

VeskoSection.displayName = "VeskoSection";

export { VeskoSection };
