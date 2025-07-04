import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";
import { RemixIcons } from "@/shared/constants/icons";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      titleKey: "forOfflineVendor.features.mobileApp.title",
      descriptionKey: "forOfflineVendor.features.mobileApp.description",
      highlightsKey: "forOfflineVendor.features.mobileApp.highlights",
      icon: RemixIcons.mobile,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      image: Assets.mobileAppMockup,
      position: "left",
      isMobileMockup: true,
    },
    {
      titleKey: "forOfflineVendor.features.logisticsReady.title",
      descriptionKey: "forOfflineVendor.features.logisticsReady.description",
      highlightsKey: "forOfflineVendor.features.logisticsReady.highlights",
      icon: RemixIcons.logistics,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      image: Assets.deliveryTruck,
      position: "right",
      isMobileMockup: false,
    },
    {
      titleKey: "forOfflineVendor.features.paymentsBuiltIn.title",
      descriptionKey: "forOfflineVendor.features.paymentsBuiltIn.description",
      highlightsKey: "forOfflineVendor.features.paymentsBuiltIn.highlights",
      icon: RemixIcons.payment,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      image: Assets.storeDashboard,
      position: "left",
      isMobileMockup: false,
    },
    {
      titleKey: "forOfflineVendor.features.socialisedSelling.title",
      descriptionKey: "forOfflineVendor.features.socialisedSelling.description",
      highlightsKey: "forOfflineVendor.features.socialisedSelling.highlights",
      icon: RemixIcons.social,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      image: Assets.veskoStore,
      position: "right",
      isMobileMockup: false,
    },
    {
      titleKey: "forOfflineVendor.features.allInOneDashboard.title",
      descriptionKey: "forOfflineVendor.features.allInOneDashboard.description",
      highlightsKey: "forOfflineVendor.features.allInOneDashboard.highlights",
      icon: RemixIcons.dashboard,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      image: Assets.storeDashboard,
      position: "left",
      isMobileMockup: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const featureVariants = {
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

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const bulletDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "backOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section className='relative bg-white py-24'>
      {/* Background decorative elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-50' />
        <div className='absolute right-10 bottom-20 h-24 w-24 rounded-full bg-purple-50' />
        <div className='absolute top-1/2 left-1/2 h-16 w-16 rounded-full bg-green-50' />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          animate='visible'
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          className='mx-auto max-w-7xl opacity-100'
          style={{ opacity: 1 }}
        >
          {/* Section Header */}
          <motion.div
            variants={featureVariants}
            className='mb-20 text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Text
              as='h2'
              variant='heading'
              className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
            >
              {t("forOfflineVendor.features.title")}
            </Text>
          </motion.div>

          {/* Features */}
          <div className='space-y-32'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                variants={featureVariants}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  feature.position === "right" ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 ${feature.position === "right" ? "lg:col-start-2" : ""}`}
                >
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <i className={`${feature.icon} text-2xl`} />
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Text
                      as='h3'
                      variant='title'
                      className='text-3xl font-bold text-gray-900 md:text-4xl'
                    >
                      {t(feature.titleKey)}
                    </Text>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Text className='text-xl leading-relaxed text-gray-600'>
                      {t(feature.descriptionKey)}
                    </Text>
                  </motion.div>

                  {/* Feature highlights */}
                  <motion.div
                    className='space-y-3'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                  >
                    {(t(feature.highlightsKey, { returnObjects: true }) as string[]).map(
                      (highlight: string, highlightIndex: number) => (
                        <motion.div
                          key={highlightIndex}
                          className='group flex items-center gap-3'
                          variants={bulletVariants}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${feature.color}`}
                            variants={bulletDotVariants}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <Text className='text-gray-700 transition-colors duration-200 group-hover:text-gray-900'>
                            {highlight}
                          </Text>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  className={`relative ${feature.position === "right" ? "lg:col-start-1" : ""}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl shadow-2xl ${
                      feature.isMobileMockup ? "bg-gray-100" : ""
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={feature.image}
                      alt={t(feature.titleKey)}
                      className={`w-full ${
                        feature.isMobileMockup
                          ? "h-[400px] object-cover !object-top"
                          : "h-[400px] object-cover"
                      }`}
                    />

                    {/* Overlay gradient */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />

                    {/* Floating elements */}
                    <motion.div
                      variants={floatingVariants}
                      animate='animate'
                      className='absolute top-4 right-4 h-6 w-6 rounded-full bg-white/20 backdrop-blur-sm'
                    />
                    <motion.div
                      variants={floatingVariants}
                      animate='animate'
                      transition={{ delay: 1 }}
                      className='absolute bottom-4 left-4 h-4 w-4 rounded-full bg-white/20 backdrop-blur-sm'
                    />
                  </motion.div>

                  {/* Background decorative element */}
                  <div
                    className={`absolute -inset-4 ${feature.bgColor} -z-10 rounded-3xl opacity-30`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={featureVariants}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mt-20 text-center'
          >
            <div className='mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-12'>
              <Text className='mb-4 text-2xl font-bold text-gray-900'>
                {t("forOfflineVendor.features.cta.title")}
              </Text>
              <Text className='mb-8 text-lg text-gray-600'>
                {t("forOfflineVendor.features.cta.description")}
              </Text>
              <div className='flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500'>
                <div className='flex items-center gap-2'>
                  <i className={`${RemixIcons.check} text-green-500`} />
                  <span>{t("forOfflineVendor.features.cta.trustIndicators.freeTrial")}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <i className={`${RemixIcons.check} text-green-500`} />
                  <span>{t("forOfflineVendor.features.cta.trustIndicators.noSetupFees")}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <i className={`${RemixIcons.check} text-green-500`} />
                  <span>{t("forOfflineVendor.features.cta.trustIndicators.support")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { FeaturesSection };
