import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";
import { cn } from "@/shared/utils/cn";

const TRMD_IMAGES = [
  Assets.tRmd1,
  Assets.tRmd2,
  Assets.tRmd3,
  Assets.tRmd4,
  Assets.tRmd5,
  Assets.tRmd6,
];

const BRMD_IMAGES = [
  Assets.bRmd1,
  Assets.bRmd2,
  Assets.bRmd3,
  Assets.bRmd4,
  Assets.bRmd5,
  Assets.bRmd6,
];

const RealMeetDigitalSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const imageRowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <Section className='relative overflow-hidden bg-black'>
      {/* Animated image rows */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-10%" }}
        className='flex flex-col justify-center gap-4'
      >
        {/* Top row */}
        <motion.div
          variants={imageRowVariants}
          className='flex h-[200px] lg:h-[440px]'
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...TRMD_IMAGES, ...TRMD_IMAGES].map((image, index) => (
            <motion.div
              key={`top-${index}`}
              className='relative mr-2 h-full w-[150px] flex-shrink-0 sm:w-[180px] md:w-[220px] lg:mr-4 lg:w-[calc(100vw/6)]'
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={image}
                alt={`Real meets digital ${index + 1}`}
                className='h-full rounded-lg transition-transform duration-300 hover:scale-105'
                objectFit='cover'
              />
              {/* Hover overlay */}
              <div className='absolute inset-0 rounded-lg bg-black/0 transition-colors duration-300 hover:bg-black/20' />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row */}
        <motion.div
          variants={imageRowVariants}
          className='flex h-[200px] lg:h-[440px]'
          initial={{ x: "-100%" }}
          animate={{
            x: ["-100%", "0%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...BRMD_IMAGES, ...BRMD_IMAGES].map((image, index) => (
            <motion.div
              key={`bottom-${index}`}
              className='relative mr-2 h-full w-[150px] flex-shrink-0 sm:w-[180px] md:w-[220px] lg:mr-4 lg:w-[calc(100vw/6)]'
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={image}
                alt={`Real meets digital ${index + 1}`}
                className='h-full rounded-lg transition-transform duration-300 hover:scale-105'
                objectFit='cover'
              />
              {/* Hover overlay */}
              <div className='absolute inset-0 rounded-lg bg-black/0 transition-colors duration-300 hover:bg-black/20' />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40'
      />

      {/* Content overlay */}
      <Container className='absolute inset-0 z-10 grid place-content-center'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='mx-auto max-w-5xl text-center'
        >
          <motion.div variants={titleVariants}>
            <Text
              as='h2'
              className={cn(
                "mb-8 text-4xl font-bold text-white md:text-5xl lg:text-7xl xl:text-8xl",
                "leading-tight"
              )}
            >
              {t("forPeople.realMeetDigital.title")}
            </Text>
          </motion.div>

          <motion.div variants={descriptionVariants}>
            <Text className='mx-auto max-w-4xl text-lg leading-relaxed text-white/90 md:text-xl lg:text-2xl'>
              {t("forPeople.realMeetDigital.description")}
            </Text>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className='via-accent-400 mx-auto mt-8 h-1 bg-gradient-to-r from-transparent to-transparent'
          />

          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className='pointer-events-none absolute inset-0 overflow-hidden'
          >
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className='bg-accent-400/40 absolute top-20 left-10 h-3 w-3 rounded-full'
            />
            <motion.div
              animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className='absolute top-40 right-20 h-2 w-2 rounded-full bg-blue-400/40'
            />
            <motion.div
              animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className='absolute bottom-20 left-1/4 h-2.5 w-2.5 rounded-full bg-purple-400/40'
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { RealMeetDigitalSection };
