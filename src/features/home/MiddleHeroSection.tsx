import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { ImageSplitReveal } from "@/shared/components/ui/animated/ImageSplitReveal";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";

const MiddleHeroSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

  // Scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers when element enters and exits viewport
  });

  // Translate the section slower than scroll speed
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section ref={ref} className='relative h-[600px] overflow-hidden md:h-[800px]'>
      <motion.div style={{ y }} className='absolute inset-0 z-0'>
        <ImageSplitReveal />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40' />
      </motion.div>

      {/* Floating background elements */}
      <div className='pointer-events-none absolute inset-0 z-5 overflow-hidden'>
        <motion.div
          variants={floatingVariants}
          animate='animate'
          className='absolute top-20 left-20 h-4 w-4 rounded-full bg-white/20'
        />
        <motion.div
          variants={floatingVariants}
          animate='animate'
          transition={{ delay: 1 }}
          className='bg-accent-400/30 absolute top-40 right-32 h-6 w-6 rounded-full'
        />
        <motion.div
          variants={floatingVariants}
          animate='animate'
          transition={{ delay: 2 }}
          className='absolute bottom-20 left-1/3 h-3 w-3 rounded-full bg-purple-400/30'
        />
        <motion.div
          variants={floatingVariants}
          animate='animate'
          transition={{ delay: 0.5 }}
          className='absolute right-1/4 bottom-40 h-5 w-5 rounded-full bg-blue-400/30'
        />
      </div>

      <div className='relative z-10 flex h-full items-center justify-center px-4 text-center text-white'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='w-full xl:w-4/5'
        >
          <div className='relative h-full w-full'>
            <motion.div variants={textVariants}>
              <Text
                variant='heading'
                className='text-default-white absolute bottom-0 left-0 !text-4xl drop-shadow-2xl lg:!text-8xl xl:!text-[8rem]'
              >
                {t("home.middleHero.line1")}
              </Text>
            </motion.div>
            <motion.div variants={textVariants}>
              <Text
                variant='heading'
                className='text-accent-400 absolute top-0 right-0 !text-4xl drop-shadow-2xl lg:!text-8xl xl:!text-[8rem]'
              >
                {t("home.middleHero.line2")}
              </Text>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

MiddleHeroSection.displayName = "MiddleHeroSection";

export { MiddleHeroSection };
