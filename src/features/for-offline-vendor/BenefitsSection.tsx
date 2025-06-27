import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";
import { RemixIcons } from "@/shared/constants/icons";

const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      titleKey: "forOfflineVendor.benefits.growth.title",
      descriptionKey: "forOfflineVendor.benefits.growth.description",
      icon: RemixIcons.growth,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      image: Assets.productOnTable,
    },
    {
      titleKey: "forOfflineVendor.benefits.unifiedInventory.title",
      descriptionKey: "forOfflineVendor.benefits.unifiedInventory.description",
      icon: RemixIcons.inventory,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      image: Assets.inventoryManagement,
    },
    {
      titleKey: "forOfflineVendor.benefits.scalable.title",
      descriptionKey: "forOfflineVendor.benefits.scalable.description",
      icon: RemixIcons.scalable,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      image: Assets.veskoStore,
    },
    {
      titleKey: "forOfflineVendor.benefits.expandReach.title",
      descriptionKey: "forOfflineVendor.benefits.expandReach.description",
      icon: RemixIcons.expand,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      image: Assets.storeDashboard,
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
          viewport={{ once: true, amount: 0.3 }}
          className='mx-auto max-w-7xl'
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className='mb-16 text-center'>
            <Text
              as='h2'
              variant='heading'
              className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
            >
              {t("forOfflineVendor.benefits.title")}
            </Text>
          </motion.div>

          {/* Benefits Grid */}
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.titleKey}
                variants={cardVariants}
                className='group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl'
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${benefit.bgColor} opacity-50`} />

                {/* Content */}
                <div className='relative z-10'>
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${benefit.color} text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`${benefit.icon} text-2xl`} />
                  </motion.div>

                  {/* Title */}
                  <Text as='h3' variant='title' className='mb-4 text-2xl font-bold text-gray-900'>
                    {t(benefit.titleKey)}
                  </Text>

                  {/* Description */}
                  <Text className='mb-6 leading-relaxed text-gray-600'>
                    {t(benefit.descriptionKey)}
                  </Text>

                  {/* Image */}
                  <div className='relative overflow-hidden rounded-xl'>
                    <Image
                      src={benefit.image}
                      alt={t(benefit.titleKey)}
                      className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  variants={floatingVariants}
                  animate='animate'
                  transition={{ delay: index * 0.5 }}
                  className='absolute -top-2 -right-2 h-4 w-4 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30'
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={cardVariants} className='mt-16 text-center'>
            <div className='mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8'>
              <Text className='mb-4 text-xl font-semibold text-gray-900'>
                {t("forOfflineVendor.benefits.cta.title")}
              </Text>
              <Text className='text-gray-600'>
                {t("forOfflineVendor.benefits.cta.description")}
              </Text>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { BenefitsSection };
