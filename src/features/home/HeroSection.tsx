import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const HeroSection = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const smallDeviceControls = useAnimation();
  const [animationState, setAnimationState] = useState<"initial" | "animated">("initial");

  const isLargeScreen = useMediaQuery({ minWidth: 1025 });

  useEffect(() => {
    const threshold = 120;

    void smallDeviceControls.start("animate");

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > threshold && animationState === "initial") {
        void controls.start("animate");
        setAnimationState("animated");
      } else if (currentScrollY <= threshold && animationState === "animated") {
        void controls.start("initial");
        setAnimationState("initial");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isLargeScreen, smallDeviceControls, animationState, controls]);

  const desktopVariants = {
    initial: { opacity: isLargeScreen ? 1 : 0, y: 0, rotate: -8, scale: 1 },
    animate: {
      opacity: 0,
      y: -120,
      scale: 0.8,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const mobileVariants = {
    initial: {
      opacity: 1,
      scale: isLargeScreen ? 0.5 : 1.2,
      rotate: 12,
      x: 120,
      y: 80,
      transition: { type: "tween" },
    },
    animate: {
      opacity: 1,
      scale: isLargeScreen ? 0.9 : 1.2,
      rotate: 0,
      x: isLargeScreen ? -480 : 0,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const smallDeviceVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 1, ease: "easeInOut" },
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const heroTextVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  const floatingVariants = {
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

  return (
    <>
      <Section className='from-accent-700 hidden min-h-screen items-center bg-gradient-to-b to-black px-4 py-32 xl:flex'>
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
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

        <Container className='flex items-center justify-center'>
          <motion.img
            src={Assets.heroDesktop}
            alt='Desktop'
            className='z-10 max-w-5xl rounded-xl drop-shadow-2xl'
            initial='initial'
            animate={controls}
            variants={desktopVariants}
          />
          <motion.div
            initial='initial'
            animate={smallDeviceControls}
            variants={heroTextVariants}
            className='-mt-96 -ml-20 min-w-[500px] flex-1'
          >
            <Text className='text-default-white' as='h1' variant='heading' weight='normal'>
              {t("home.hero.mainHeading")}
            </Text>
          </motion.div>
          <motion.img
            src={Assets.heroMobile}
            alt='Mobile'
            className='z-20 w-1/4 rounded-xl drop-shadow-2xl md:absolute md:right-0 md:bottom-0'
            initial='initial'
            animate={controls}
            variants={mobileVariants}
            style={
              animationState === "animated"
                ? { bottom: 0, right: 0, transform: "translate(50%, 50%)" }
                : undefined
            }
          />
        </Container>
      </Section>

      <Section className='from-accent-700 flex h-[70dvh] justify-center overflow-hidden bg-gradient-to-b to-black pt-24 !pb-0 sm:pt-48 md:pt-32 lg:pt-[12.5rem] xl:hidden'>
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
          <motion.div
            variants={floatingVariants}
            animate='animate'
            className='absolute top-20 left-10 h-4 w-4 rounded-full bg-white/20'
          />
          <motion.div
            variants={floatingVariants}
            animate='animate'
            transition={{ delay: 1 }}
            className='bg-accent-400/30 absolute top-40 right-20 h-6 w-6 rounded-full'
          />
          <motion.div
            variants={floatingVariants}
            animate='animate'
            transition={{ delay: 2 }}
            className='absolute bottom-20 left-1/4 h-3 w-3 rounded-full bg-purple-400/30'
          />
        </div>

        <motion.img
          src={Assets.heroMobile}
          alt='Mobile'
          className='absolute -bottom-3/5 z-20 w-2/3 rounded-xl drop-shadow-2xl md:-bottom-4/5'
          initial='initial'
          animate={smallDeviceControls}
          variants={smallDeviceVariants}
        />
        <Text className='text-default-white text-center' as='h1' variant='heading' weight='normal'>
          {t("home.hero.mainHeading")}
        </Text>
      </Section>
    </>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
