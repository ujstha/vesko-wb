import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";
import { RemixIcons } from "@/shared/constants/icons";

const POSSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      titleKey: "forOfflineVendor.posSection.features.weProvidePOS.title",
      descriptionKey: "forOfflineVendor.posSection.features.weProvidePOS.description",
      icon: RemixIcons.pos,
      color: "from-blue-500 to-blue-600",
    },
    {
      titleKey: "forOfflineVendor.posSection.features.thirdPartyIntegration.title",
      descriptionKey: "forOfflineVendor.posSection.features.thirdPartyIntegration.description",
      icon: RemixIcons.integration,
      color: "from-green-500 to-green-600",
    },
    {
      titleKey: "forOfflineVendor.posSection.features.customIntegration.title",
      descriptionKey: "forOfflineVendor.posSection.features.customIntegration.description",
      icon: RemixIcons.settings,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <Section className='bg-white'>
      {/* Background decorative elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-50' />
        <div className='absolute right-10 bottom-20 h-24 w-24 rounded-full bg-purple-50' />
        <div className='absolute top-1/2 left-1/2 h-16 w-16 rounded-full bg-green-50' />
      </div>

      <Container className='relative'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mx-auto max-w-7xl'
        >
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            {/* Text Content */}
            <motion.div variants={textVariants} className='space-y-8'>
              {/* Headline */}
              <div>
                <Text
                  as='h2'
                  variant='heading'
                  className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
                >
                  {t("forOfflineVendor.posSection.title")}
                </Text>
              </div>

              {/* Subheader */}
              <div>
                <Text className='text-xl leading-relaxed text-gray-600 md:text-2xl'>
                  {t("forOfflineVendor.posSection.description")}
                </Text>
              </div>

              {/* Features */}
              <div className='space-y-6'>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className='flex items-start gap-4'
                  >
                    <motion.div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className={`${feature.icon} text-xl`} />
                    </motion.div>
                    <div>
                      <Text className='mb-1 font-semibold text-gray-900'>
                        {t(feature.titleKey)}
                      </Text>
                      <Text className='text-gray-600'>{t(feature.descriptionKey)}</Text>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Benefits */}
              <div className='rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-6'>
                <Text className='mb-3 font-semibold text-gray-900'>
                  {t("forOfflineVendor.posSection.benefits.title")}
                </Text>
                <div className='space-y-2'>
                  <div className='flex items-center gap-2'>
                    <i className={`${RemixIcons.check} text-green-500`} />
                    <Text className='text-sm text-gray-600'>
                      {t("forOfflineVendor.posSection.benefits.seamlessIntegration")}
                    </Text>
                  </div>
                  <div className='flex items-center gap-2'>
                    <i className={`${RemixIcons.check} text-green-500`} />
                    <Text className='text-sm text-gray-600'>
                      {t("forOfflineVendor.posSection.benefits.realTimeSync")}
                    </Text>
                  </div>
                  <div className='flex items-center gap-2'>
                    <i className={`${RemixIcons.check} text-green-500`} />
                    <Text className='text-sm text-gray-600'>
                      {t("forOfflineVendor.posSection.benefits.unifiedData")}
                    </Text>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              variants={imageVariants}
              className='relative flex justify-center lg:justify-end'
            >
              {/* Main POS Image */}
              <motion.div
                className='relative overflow-hidden rounded-2xl shadow-2xl'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={Assets.posSystem}
                  alt='Cashier Register system showing POS integration'
                  className='h-[500px] w-[400px] object-cover'
                />

                {/* Overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />

                {/* Floating elements */}
                <motion.div
                  variants={floatingVariants}
                  animate='animate'
                  className='absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm'
                />
                <motion.div
                  variants={floatingVariants}
                  animate='animate'
                  transition={{ delay: 1 }}
                  className='absolute bottom-4 left-4 h-6 w-6 rounded-full bg-white/20 backdrop-blur-sm'
                />
                <motion.div
                  variants={floatingVariants}
                  animate='animate'
                  transition={{ delay: 2 }}
                  className='absolute top-1/2 -right-6 h-4 w-4 rounded-full bg-blue-400/30'
                />
              </motion.div>

              {/* Background decorative elements */}
              <div className='absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-30' />
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={textVariants} className='mt-16 text-center'>
            <div className='mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8'>
              <Text className='mb-4 text-xl font-semibold text-gray-900'>
                {t("forOfflineVendor.posSection.cta.title")}
              </Text>
              <Text className='mb-6 text-gray-600'>
                {t("forOfflineVendor.posSection.cta.description")}
              </Text>
              <div className='flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500'>
                <div className='flex items-center gap-2'>
                  <i className={`${RemixIcons.check} text-green-500`} />
                  <span>
                    {t("forOfflineVendor.posSection.cta.trustIndicators.freeConsultation")}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <i className={`${RemixIcons.check} text-green-500`} />
                  <span>{t("forOfflineVendor.posSection.cta.trustIndicators.quickSetup")}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <i className={`${RemixIcons.check} text-green-500`} />
                  <span>{t("forOfflineVendor.posSection.cta.trustIndicators.ongoingSupport")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { POSSection };
