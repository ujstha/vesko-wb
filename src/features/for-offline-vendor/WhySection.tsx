import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const WhySection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const videoContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section className='bg-gradient-to-br from-blue-50 to-indigo-100 py-20'>
      <Container>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mx-auto max-w-6xl'
        >
          {/* Main Headline */}
          <motion.div variants={textVariants} className='mb-6 text-center'>
            <Text
              as='h2'
              variant='heading'
              className='text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl'
            >
              {t("forOfflineVendor.why.title")}
            </Text>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={textVariants} className='mb-16 text-center'>
            <Text className='text-xl text-gray-600 md:text-2xl'>
              {t("forOfflineVendor.why.subtitle")}
            </Text>
          </motion.div>

          {/* Video Container */}
          <motion.div variants={videoContainerVariants} className='relative mx-auto max-w-4xl'>
            {/* Video Placeholder */}
            <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl'>
              {/* Video Background */}
              <div className='aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20'>
                <div className='flex h-full items-center justify-center'>
                  {/* Play Button */}
                  <motion.div
                    variants={pulseVariants}
                    animate='animate'
                    className='flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm'
                  >
                    <i className={`${RemixIcons.play} text-3xl text-white`} />
                  </motion.div>
                </div>
              </div>

              {/* Video Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />

              {/* Video Controls */}
              <div className='absolute right-4 bottom-4 left-4 flex items-center justify-between'>
                <div className='flex items-center gap-3 text-white'>
                  <div className='h-2 flex-1 rounded-full bg-white/30'>
                    <div className='h-full w-1/3 rounded-full bg-white' />
                  </div>
                  <span className='text-sm'>{t("forOfflineVendor.why.video.progress")}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <button className='rounded-full p-2 text-white hover:bg-white/20'>
                    <i className={`${RemixIcons.pause} text-lg`} />
                  </button>
                  <button className='rounded-full p-2 text-white hover:bg-white/20'>
                    <i className={`${RemixIcons.settings} text-lg`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating elements around video */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className='absolute -top-4 -left-4 h-6 w-6 rounded-full bg-blue-400/30'
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className='absolute -right-4 -bottom-4 h-4 w-4 rounded-full bg-purple-400/30'
            />
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className='absolute top-1/2 -right-6 h-3 w-3 rounded-full bg-green-400/30'
            />
          </motion.div>

          {/* Stats */}
          <motion.div variants={textVariants} className='mt-12 grid grid-cols-3 gap-6 text-center'>
            <div className='rounded-lg bg-white/50 p-6 backdrop-blur-sm'>
              <Text className='text-5xl font-bold text-blue-600 lg:text-6xl'>
                {t("forOfflineVendor.why.stats.onlinePurchases.percentage")}
              </Text>
              <Text className='text-gray-600'>
                {t("forOfflineVendor.why.stats.onlinePurchases.description")}
              </Text>
            </div>
            <div className='rounded-lg bg-white/50 p-6 backdrop-blur-sm'>
              <Text className='text-5xl font-bold text-purple-600 lg:text-6xl'>
                {t("forOfflineVendor.why.stats.storeVisits.multiplier")}
              </Text>
              <Text className='text-gray-600'>
                {t("forOfflineVendor.why.stats.storeVisits.description")}
              </Text>
            </div>
            <div className='rounded-lg bg-white/50 p-6 backdrop-blur-sm'>
              <Text className='text-5xl font-bold text-green-600 lg:text-6xl'>
                {t("forOfflineVendor.why.stats.conversionRate.percentage")}
              </Text>
              <Text className='text-gray-600'>
                {t("forOfflineVendor.why.stats.conversionRate.description")}
              </Text>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { WhySection };
