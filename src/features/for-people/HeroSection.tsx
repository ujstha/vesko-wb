import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { WaitlistForm } from "@/shared/components/common/WaitlistForm";
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

  const formVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
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

  const floatingElementVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section
      className='relative min-h-screen items-center bg-cover px-4 py-32 xl:flex'
      style={{ backgroundImage: `url(${Assets.forPeopleHero})` }}
    >
      {/* Enhanced background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-white/30 via-white/20 to-transparent backdrop-blur-sm'
      />

      {/* Floating background elements - people/community themed */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        {/* Connection lines */}
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          className='from-accent-400/40 absolute top-32 left-20 h-16 w-0.5 bg-gradient-to-b to-transparent'
        />
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 1 }}
          className='absolute top-40 right-32 h-12 w-0.5 bg-gradient-to-b from-blue-400/40 to-transparent'
        />

        {/* Floating dots representing people */}
        <motion.div
          variants={pulseVariants}
          animate='animate'
          className='bg-accent-400/50 absolute top-24 left-1/4 h-3 w-3 rounded-full'
        />
        <motion.div
          variants={pulseVariants}
          animate='animate'
          transition={{ delay: 0.5 }}
          className='absolute top-48 right-1/3 h-2 w-2 rounded-full bg-blue-400/50'
        />
        <motion.div
          variants={pulseVariants}
          animate='animate'
          transition={{ delay: 1 }}
          className='absolute bottom-32 left-1/3 h-2.5 w-2.5 rounded-full bg-purple-400/50'
        />
        <motion.div
          variants={pulseVariants}
          animate='animate'
          transition={{ delay: 1.5 }}
          className='absolute right-1/4 bottom-40 h-2 w-2 rounded-full bg-green-400/50'
        />

        {/* Connection circles */}
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 0.8 }}
          className='border-accent-400/30 absolute top-36 left-1/2 h-8 w-8 rounded-full border'
        />
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 1.2 }}
          className='absolute right-1/2 bottom-36 h-6 w-6 rounded-full border border-blue-400/30'
        />
      </div>

      <Container className='relative z-20 flex flex-col justify-between gap-4 px-4 py-16 xl:flex-row xl:items-center'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='flex flex-col gap-8'
        >
          {/* Content Container */}
          <div className='flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between'>
            <div>
              {/* Main Title */}
              <motion.div variants={titleVariants}>
                <Text
                  as='h1'
                  variant='heading'
                  color='primaryLight'
                  className='text-4xl font-bold md:text-5xl lg:text-7xl xl:text-8xl'
                >
                  {t("forPeople.hero.title")}
                </Text>
              </motion.div>
              {/* Subtitle and Description */}
              <motion.div variants={subtitleVariants} className='max-w-md'>
                <Text color='primaryLight' className='mb-4 text-xl leading-relaxed md:text-2xl'>
                  {t("forPeople.hero.subtitle")}
                </Text>
                <Text color='primaryLight' className='text-lg opacity-90'>
                  {t("forPeople.hero.description")}
                </Text>
              </motion.div>
            </div>

            {/* Enhanced Waitlist Form */}
            <motion.div variants={formVariants} className='max-w-md'>
              <div className='relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-8 shadow-2xl backdrop-blur-md'>
                {/* Background glow effect */}
                <div className='from-accent-400/10 absolute inset-0 rounded-2xl bg-gradient-to-br to-purple-400/10' />
                <div className='bg-accent-400/20 absolute -top-4 -right-4 h-8 w-8 rounded-full blur-xl' />
                <div className='absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-purple-400/20 blur-xl' />

                <div className='relative z-10'>
                  {/* Form Header */}
                  <div className='mb-6 text-center'>
                    <Text className='mb-2 text-xl font-bold text-white'>
                      {t("forPeople.hero.formTitle")}
                    </Text>
                    <Text className='text-sm text-white/80'>
                      Join 2,847+ people already waiting
                    </Text>
                  </div>

                  {/* Enhanced Form */}
                  <div className='space-y-4'>
                    <WaitlistForm
                      buttonText={t("forPeople.hero.waitlist.button")}
                      placeholder={t("forPeople.hero.waitlist.placeholder")}
                      successMessage={t("forPeople.hero.waitlist.success")}
                    />
                  </div>

                  {/* Trust indicators */}
                  <div className='mt-6 border-t border-white/10 pt-4'>
                    <div className='flex items-center justify-center space-x-4 text-xs text-white/60'>
                      <div className='flex items-center space-x-1'>
                        <div className='h-2 w-2 rounded-full bg-green-400' />
                        <span>{t("forPeople.hero.trustIndicators.free")}</span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <div className='h-2 w-2 rounded-full bg-blue-400' />
                        <span>{t("forPeople.hero.trustIndicators.earlyAccess")}</span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <div className='h-2 w-2 rounded-full bg-purple-400' />
                        <span>{t("forPeople.hero.trustIndicators.noSpam")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Urgency indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className='bg-accent-400/10 border-accent-400/20 mt-4 rounded-lg border p-3'
                  >
                    <Text className='text-accent-300 text-center text-xs font-medium'>
                      {t("forPeople.hero.urgencyMessage")}
                    </Text>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        variants={scrollIndicatorVariants}
        className='absolute bottom-8 left-1/2 z-30 -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className='flex flex-col items-center space-y-2'
        >
          <Text className='text-sm text-white/70'>Discover more</Text>
          <div className='h-6 w-0.5 bg-gradient-to-b from-white/70 to-transparent' />
        </motion.div>
      </motion.div>

      {/* Background texture overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px] opacity-30' />
    </Section>
  );
};

export { HeroSection };
