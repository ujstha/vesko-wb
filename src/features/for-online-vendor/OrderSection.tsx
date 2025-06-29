import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";
import { RemixIcons } from "@/shared/constants/icons";

const OrderSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      titleKey: "forOnlineVendor.orderSection.steps.receiveOrder.title",
      descriptionKey: "forOnlineVendor.orderSection.steps.receiveOrder.description",
      icon: RemixIcons.order,
      color: "from-blue-500 to-blue-600",
      step: "01",
    },
    {
      titleKey: "forOnlineVendor.orderSection.steps.preparePackage.title",
      descriptionKey: "forOnlineVendor.orderSection.steps.preparePackage.description",
      icon: RemixIcons.print,
      color: "from-green-500 to-green-600",
      step: "02",
    },
    {
      titleKey: "forOnlineVendor.orderSection.steps.sendForDelivery.title",
      descriptionKey: "forOnlineVendor.orderSection.steps.sendForDelivery.description",
      icon: RemixIcons.delivery,
      color: "from-purple-500 to-purple-600",
      step: "03",
    },
  ];

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

  const stepVariants = {
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
    <Section className='relative bg-gray-50'>
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
            <motion.div variants={stepVariants} className='space-y-8'>
              {/* Headline */}
              <div>
                <Text
                  as='h2'
                  variant='heading'
                  className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
                >
                  {t("forOnlineVendor.orderSection.title")}
                </Text>
              </div>

              {/* Steps */}
              <div className='space-y-8'>
                {steps.map((step, index) => (
                  <motion.div
                    key={step.titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className='flex items-start gap-4'
                  >
                    <motion.div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${step.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className={`${step.icon} text-xl`} />
                    </motion.div>
                    <div className='flex-1'>
                      <Text className='mb-1 font-semibold text-gray-900'>{t(step.titleKey)}</Text>
                      <Text className='text-gray-600'>{t(step.descriptionKey)}</Text>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className='rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-6'>
                <div className='space-y-3'>
                  <div className='flex items-center gap-2'>
                    <i className={`${RemixIcons.check} text-green-500`} />
                    <Text className='text-sm text-gray-600'>
                      {t("forOnlineVendor.orderSection.trustIndicators.automatedLabels")}
                    </Text>
                  </div>
                  <div className='flex items-center gap-2'>
                    <i className={`${RemixIcons.check} text-green-500`} />
                    <Text className='text-sm text-gray-600'>
                      {t("forOnlineVendor.orderSection.trustIndicators.realTimeTracking")}
                    </Text>
                  </div>
                  <div className='flex items-center gap-2'>
                    <i className={`${RemixIcons.check} text-green-500`} />
                    <Text className='text-sm text-gray-600'>
                      {t("forOnlineVendor.orderSection.trustIndicators.trustedPartners")}
                    </Text>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              variants={stepVariants}
              className='relative flex justify-center lg:justify-end'
            >
              {/* Main Order Image */}
              <motion.div
                className='relative overflow-hidden rounded-2xl shadow-2xl'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={Assets.shippingLabel}
                  alt='Order fulfillment process showing shipping and delivery'
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

          {/* Bottom Message */}
          <motion.div variants={stepVariants} className='mt-16 text-center'>
            <div className='mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8'>
              <Text className='mb-4 text-xl font-semibold text-gray-900'>
                {t("forOnlineVendor.orderSection.bottomMessage.title")}
              </Text>
              <Text className='text-gray-600'>
                {t("forOnlineVendor.orderSection.bottomMessage.subtitle")}
              </Text>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { OrderSection };
