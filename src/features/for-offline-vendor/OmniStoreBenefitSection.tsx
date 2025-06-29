import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { NavItem } from "@/shared/components/common/NavItem";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const OmniStoreBenefitSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section className='bg-gradient-to-br from-slate-50 to-slate-100 py-24'>
      <Container>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mx-auto max-w-4xl text-center'
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className='mb-8'>
            <Text
              as='h2'
              variant='heading'
              className='mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl'
            >
              {t("forOfflineVendor.omnistoreBenefit.title")}
            </Text>
          </motion.div>

          {/* Subheader */}
          <motion.div variants={itemVariants} className='mb-12'>
            <Text className='text-lg text-gray-600 md:text-xl'>
              {t("forOfflineVendor.omnistoreBenefit.subtitle")}
            </Text>
          </motion.div>

          {/* Register Button */}
          <motion.div variants={buttonVariants}>
            <NavItem
              id='register'
              label='nav.register'
              routeKey='register'
              isCTA
              className='from-accent-500 hover:from-accent-600 to-accent-600 hover:to-accent-700 border-0 bg-gradient-to-br px-8 py-4 text-lg font-semibold text-white shadow-lg'
            />
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className='mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500'
          >
            <div className='flex items-center gap-2'>
              <i className={`${RemixIcons.check} text-green-500`} />
              <span>{t("forOfflineVendor.omnistoreBenefit.trustIndicators.freeTrial")}</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className={`${RemixIcons.check} text-green-500`} />
              <span>{t("forOfflineVendor.omnistoreBenefit.trustIndicators.noSetupFees")}</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className={`${RemixIcons.check} text-green-500`} />
              <span>{t("forOfflineVendor.omnistoreBenefit.trustIndicators.cancelAnytime")}</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { OmniStoreBenefitSection };
