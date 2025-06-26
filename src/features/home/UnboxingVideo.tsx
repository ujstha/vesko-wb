import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";
import { RemixIcons } from "@/shared/constants/icons";

const UnboxingVideo = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      void videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
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

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Section className='bg-black'>
      <Container className='relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='mb-12 text-center'
        >
          <motion.div variants={titleVariants}>
            <Text as='h2' className='mb-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl'>
              {t("home.unboxing.heading")}
            </Text>
            <Text className='text-lg text-white/80 md:text-xl'>
              Experience the magic of unboxing
            </Text>
          </motion.div>
        </motion.div>

        <motion.div
          variants={videoVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl'
        >
          <video
            ref={videoRef}
            className='aspect-video h-auto w-full object-cover'
            muted
            loop
            playsInline
            aria-label='Product unboxing demonstration'
          >
            <source src={Assets.unboxingVideo} type='video/mp4' />
            {t("home.unboxing.videoNotSupported")}
          </video>

          <motion.div
            variants={buttonVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            whileHover='hover'
            className='absolute top-4 right-4 z-20'
          >
            <button
              onClick={togglePlay}
              className='group flex items-center justify-center gap-2 rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus:ring-2 focus:ring-white/50 focus:outline-none'
              aria-label={isPlaying ? t("home.unboxing.pause") : t("home.unboxing.play")}
            >
              {isPlaying ? (
                <>
                  <i className={`${RemixIcons.pause} h-4 w-4`} />
                  <span className='text-sm font-medium'>{t("home.unboxing.pause")}</span>
                </>
              ) : (
                <>
                  <i className={`${RemixIcons.play} h-4 w-4`} />
                  <span className='text-sm font-medium'>{t("home.unboxing.play")}</span>
                </>
              )}
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { UnboxingVideo };
