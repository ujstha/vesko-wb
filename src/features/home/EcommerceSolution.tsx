import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const EcommerceSolution = () => {
  const { t } = useTranslation();

  const leftCardVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const rightCardVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotateY: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <Section>
      <Container>
        <Text variant='heading' className='mb-10 text-center md:mb-16' as='h2'>
          {t("home.ecommerce.heading")}
        </Text>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <motion.div
            variants={leftCardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-20%" }}
            className='transform-gpu overflow-hidden rounded-xl border border-neutral-200 bg-white'
          >
            <Image src={Assets.omnistore} alt='OmniStore' className='h-[25rem]' />
            <div className='p-6'>
              <Text variant='subheading' as='h3'>
                {t("home.ecommerce.omnistore.title")}
              </Text>
              <Text variant='subtitle' weight='normal'>
                {t("home.ecommerce.omnistore.subtitle")}
              </Text>
              <Text className='mt-4'>{t("home.ecommerce.omnistore.description")}</Text>
            </div>
          </motion.div>
          <motion.div
            variants={rightCardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-20%" }}
            className='transform-gpu overflow-hidden rounded-xl border border-neutral-200 bg-white'
          >
            <Image src={Assets.onlinestore} alt='Online' className='h-[25rem]' />
            <div className='p-6'>
              <Text variant='subheading' as='h3'>
                {t("home.ecommerce.onlineStore.title")}
              </Text>
              <Text variant='subtitle' weight='normal'>
                {t("home.ecommerce.onlineStore.subtitle")}
              </Text>
              <Text className='mt-4'>{t("home.ecommerce.onlineStore.description")}</Text>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

EcommerceSolution.displayName = "EcommerceSolution";

export { EcommerceSolution };
