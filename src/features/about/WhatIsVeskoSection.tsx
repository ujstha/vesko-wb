import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const WhatIsVeskoSection = () => {
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section className='relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20'>
      {/* Animated background elements */}
      <motion.div
        variants={backgroundVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-10%" }}
        className='absolute inset-0 opacity-5'
      >
        <div className='bg-accent-400 absolute -top-20 -left-20 h-40 w-40 rounded-full blur-3xl' />
        <div className='absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-blue-400 blur-3xl' />
        <div className='absolute top-1/2 left-1/4 h-32 w-32 rounded-full bg-purple-400 blur-2xl' />
      </motion.div>

      <Container className='relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='mx-auto max-w-4xl text-center'
        >
          {/* Title */}
          <motion.div variants={titleVariants} className='mb-8'>
            <Text
              as='h2'
              variant='heading'
              className='text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
            >
              {t("about.whatIsVesko.title")}
            </Text>
          </motion.div>

          {/* Logo */}
          <motion.div variants={logoVariants} className='mb-12 flex justify-center'>
            <div className='relative'>
              <motion.img
                src={Assets.logo}
                alt='Vesko Logo'
                className='h-24 w-auto md:h-32'
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              />
              {/* Glow effect */}
              <div className='bg-accent-400/20 absolute inset-0 -z-10 h-full w-full rounded-full blur-xl' />
            </div>
          </motion.div>

          {/* Description text */}
          <motion.div variants={textVariants} className='space-y-6'>
            <Text className='text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl'>
              {t("about.whatIsVesko.description")}
            </Text>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 1 }}
              className='via-accent-400 mx-auto h-1 bg-gradient-to-r from-transparent to-transparent'
            />
          </motion.div>

          {/* Additional visual elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='mt-12 flex justify-center space-x-8 text-gray-400'
          >
            <div className='flex items-center space-x-2'>
              <div className='bg-accent-400 h-2 w-2 rounded-full' />
              <span className='text-sm font-medium'>Social Media</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='h-2 w-2 rounded-full bg-blue-400' />
              <span className='text-sm font-medium'>E-commerce</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='h-2 w-2 rounded-full bg-purple-400' />
              <span className='text-sm font-medium'>OmniStore</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { WhatIsVeskoSection };
