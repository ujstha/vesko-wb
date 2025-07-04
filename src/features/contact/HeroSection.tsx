import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";

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
      y: [0, -20, 0],
      rotate: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.6, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const waveVariants = {
    animate: {
      x: [0, 100, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.2,
      },
    },
  };

  return (
    <Section className='via-accent-900 relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-slate-900'>
      {/* Unique background pattern */}
      <div className='absolute inset-0'>
        {/* Gradient mesh background */}
        <div className='via-accent-900/50 absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-900' />

        {/* Animated mesh grid */}
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]' />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          className='border-accent-400/30 absolute top-20 left-20 h-32 w-32 rounded-full border'
        />
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 2 }}
          className='border-accent-400/30 absolute top-40 right-32 h-24 w-24 rotate-45 border'
        />
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 4 }}
          className='border-accent-400/30 absolute bottom-32 left-1/3 h-20 w-20 rounded-full border'
        />

        {/* Pulse effects */}
        <motion.div
          variants={pulseVariants}
          animate='animate'
          className='bg-accent-500/10 absolute top-1/4 right-1/4 h-64 w-64 rounded-full blur-3xl'
        />
        <motion.div
          variants={pulseVariants}
          animate='animate'
          transition={{ delay: 1.5 }}
          className='bg-accent-500/10 absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full blur-3xl'
        />

        {/* Animated waves */}
        <motion.div
          variants={waveVariants}
          animate='animate'
          className='from-accent-500/20 absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t to-transparent'
        />
        <motion.div
          variants={waveVariants}
          animate='animate'
          transition={{ delay: 2 }}
          className='from-accent-500/20 absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t to-transparent'
        />
      </div>

      {/* Content container */}
      <Container className='relative z-10 flex min-h-screen items-center justify-center'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='mx-auto max-w-5xl text-center'
        >
          {/* Main Title with enhanced styling */}
          <motion.div variants={titleVariants}>
            <Text
              as='h1'
              variant='heading'
              className='mb-6 text-4xl font-bold text-white md:text-5xl lg:text-7xl xl:text-8xl'
            >
              <span className='to-accent-300 via-accent-200 bg-gradient-to-r from-white bg-clip-text text-transparent'>
                {t("contact.hero.title")}
              </span>
            </Text>
          </motion.div>

          {/* Subtitle with enhanced styling */}
          <motion.div variants={subtitleVariants} className='mx-auto mb-8 max-w-4xl'>
            <Text className='text-xl leading-relaxed font-light text-gray-200 md:text-2xl lg:text-3xl'>
              {t("contact.hero.subtitle")}
            </Text>
          </motion.div>

          {/* Description with enhanced styling */}
          <motion.div variants={subtitleVariants} className='mx-auto mb-12 max-w-3xl'>
            <Text className='text-lg leading-relaxed text-gray-300 md:text-xl'>
              {t("contact.hero.description")}
            </Text>
          </motion.div>

          {/* Enhanced decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1.5, delay: 0.9 }}
            className='to-accent-400 via-accent-400 mx-auto mb-8 h-1 bg-gradient-to-r from-transparent'
          />

          {/* Contact indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='mt-12 flex flex-wrap justify-center gap-6'
          >
            <div className='flex items-center gap-2 text-gray-300'>
              <div className='h-2 w-2 animate-pulse rounded-full bg-green-400' />
              <span className='text-sm'>{t("contact.hero.contactIndicators.support")}</span>
            </div>
            <div className='flex items-center gap-2 text-gray-300'>
              <div className='h-2 w-2 animate-pulse rounded-full bg-blue-400' />
              <span className='text-sm'>{t("contact.hero.contactIndicators.response")}</span>
            </div>
            <div className='flex items-center gap-2 text-gray-300'>
              <div className='h-2 w-2 animate-pulse rounded-full bg-purple-400' />
              <span className='text-sm'>{t("contact.hero.contactIndicators.secure")}</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator - consistent with other pages */}
      <motion.div
        variants={scrollIndicatorVariants}
        className='absolute bottom-8 left-1/2 z-20 -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className='flex flex-col items-center space-y-2'
        >
          <Text className='text-sm text-gray-400'>{t("contact.hero.scrollIndicator")}</Text>
          <div className='h-6 w-0.5 bg-gradient-to-b from-gray-400 to-transparent' />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export { HeroSection };
