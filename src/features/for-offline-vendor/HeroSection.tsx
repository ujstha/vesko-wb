import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const HeroSection = () => {
  const { t } = useTranslation();

  // Animation variants
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

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const floatingElementVariants = {
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
    <Section
      className='relative min-h-screen items-center bg-cover bg-center px-4 py-32 xl:flex'
      style={{ backgroundImage: `url(${Assets.veskoBg})` }}
    >
      {/* Enhanced background overlay with gradient animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent'
      />

      {/* Floating background elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          className='bg-accent-400/30 absolute top-20 left-10 h-3 w-3 rounded-full'
        />
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 1 }}
          className='absolute top-40 right-20 h-4 w-4 rounded-full bg-blue-400/30'
        />
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 2 }}
          className='absolute bottom-40 left-1/4 h-2 w-2 rounded-full bg-purple-400/30'
        />
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 0.5 }}
          className='absolute right-1/3 bottom-20 h-3 w-3 rounded-full bg-green-400/30'
        />
      </div>

      <Container className='relative z-10 text-center'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='mx-auto max-w-5xl'
        >
          {/* Main Title */}
          <motion.div variants={titleVariants}>
            <Text
              as='h1'
              variant='heading'
              className='mb-6 text-4xl font-bold text-white md:text-5xl lg:text-7xl xl:text-8xl'
            >
              {t("forOfflineVendor.hero.title")}
            </Text>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={subtitleVariants}>
            <Text
              variant='title'
              className='mx-auto mb-8 max-w-4xl text-xl font-normal text-gray-200 md:text-2xl lg:text-3xl'
            >
              {t("forOfflineVendor.hero.subtitle")}
            </Text>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.9 }}
            className='via-accent-400 mx-auto mb-8 h-1 bg-gradient-to-r from-transparent to-transparent'
          />
        </motion.div>
      </Container>

      {/* Scroll indicator - positioned at bottom of hero section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className='absolute bottom-8 left-1/2 z-20 -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className='flex flex-col items-center space-y-2'
        >
          <Text className='text-sm text-gray-400'>
            {t("forOfflineVendor.hero.scrollToExplore")}
          </Text>
          <div className='h-6 w-0.5 bg-gradient-to-b from-gray-400 to-transparent' />
        </motion.div>
      </motion.div>

      {/* Background texture overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20' />
    </Section>
  );
};

export { HeroSection };
