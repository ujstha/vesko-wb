import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const HowVeskosWorkSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      titleKey: "forOnlineVendor.howItWorks.steps.createStore.title",
      descriptionKey: "forOnlineVendor.howItWorks.steps.createStore.description",
      icon: RemixIcons.signup,
      color: "from-blue-500 to-blue-600",
      step: "01",
    },
    {
      titleKey: "forOnlineVendor.howItWorks.steps.addProducts.title",
      descriptionKey: "forOnlineVendor.howItWorks.steps.addProducts.description",
      icon: RemixIcons.list,
      color: "from-green-500 to-green-600",
      step: "02",
    },
    {
      titleKey: "forOnlineVendor.howItWorks.steps.startSelling.title",
      descriptionKey: "forOnlineVendor.howItWorks.steps.startSelling.description",
      icon: RemixIcons.sell,
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
    <Section className='bg-white' data-section='how-it-works'>
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
          className='mx-auto max-w-5xl'
        >
          {/* Section Header */}
          <motion.div variants={stepVariants} className='mb-20 text-center'>
            <Text
              as='h2'
              variant='heading'
              className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
            >
              {t("forOnlineVendor.howItWorks.title")}
            </Text>
          </motion.div>

          {/* Steps */}
          <div className='space-y-16'>
            {steps.map((step, index) => (
              <motion.div
                key={step.titleKey}
                variants={stepVariants}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className='relative'
              >
                {/* Step Number */}
                <div className='absolute -top-4 -left-4 z-10'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'>
                    <Text className='text-lg font-bold text-white'>{step.step}</Text>
                  </div>
                </div>

                {/* Step Content */}
                <div className='relative rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 p-8 shadow-lg'>
                  <div className='flex items-start gap-6'>
                    {/* Icon */}
                    <motion.div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${step.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className={`${step.icon} text-2xl`} />
                    </motion.div>

                    {/* Content */}
                    <div className='flex-1 space-y-4'>
                      <Text className='text-2xl font-bold text-gray-900'>{t(step.titleKey)}</Text>
                      <Text className='text-lg leading-relaxed text-gray-600'>
                        {t(step.descriptionKey)}
                      </Text>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    variants={floatingVariants}
                    animate='animate'
                    className='absolute top-4 right-4 h-4 w-4 rounded-full bg-blue-200 opacity-60'
                  />
                  <motion.div
                    variants={floatingVariants}
                    animate='animate'
                    transition={{ delay: 1 }}
                    className='absolute bottom-4 left-4 h-3 w-3 rounded-full bg-purple-200 opacity-60'
                  />
                </div>

                {/* Connecting line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className='absolute top-full left-6 h-16 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500' />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div variants={stepVariants} className='mt-20 text-center'>
            <div className='mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8'>
              <Text className='mb-2 text-2xl font-bold text-gray-900'>
                {t("forOnlineVendor.howItWorks.bottomMessage.title")}
              </Text>
              <Text className='text-lg text-gray-600'>
                {t("forOnlineVendor.howItWorks.bottomMessage.subtitle")}
              </Text>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { HowVeskosWorkSection };
