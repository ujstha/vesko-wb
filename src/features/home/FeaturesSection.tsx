import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";

const FeaturesSection = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section className='overflow-hidden bg-gradient-to-b from-white to-gray-50'>
      {/* Background decorative elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          variants={floatingVariants}
          animate='animate'
          className='bg-accent-400/20 absolute top-20 left-10 h-4 w-4 rounded-full'
        />
        <motion.div
          variants={floatingVariants}
          animate='animate'
          transition={{ delay: 1 }}
          className='absolute top-40 right-20 h-6 w-6 rounded-full bg-blue-400/20'
        />
        <motion.div
          variants={floatingVariants}
          animate='animate'
          transition={{ delay: 2 }}
          className='absolute bottom-20 left-1/4 h-3 w-3 rounded-full bg-purple-400/20'
        />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='relative mx-auto my-12 h-40 max-w-4xl'
        >
          {/* Enhanced text with better styling */}
          <motion.div
            variants={textVariants}
            className='absolute top-1/2 z-30 w-full -translate-y-1/2 text-center'
          >
            <Text
              className='text-2xl font-semibold text-gray-800 md:text-3xl lg:text-4xl'
              variant='subheading'
              weight='normal'
            >
              {t("home.features.description")}
            </Text>
          </motion.div>

          {/* Animated decorative shapes */}
          <motion.div
            variants={shapeVariants}
            className='from-accent-400/30 border-accent-400/20 absolute -top-2 left-5 size-32 rotate-[30deg] rounded-3xl border bg-gradient-to-br to-purple-400/30 backdrop-blur-sm'
          />
          <motion.div
            variants={shapeVariants}
            transition={{ delay: 0.3 }}
            className='to-accent-400/30 absolute right-5 bottom-0 size-24 -rotate-[30deg] rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-400/30 backdrop-blur-sm'
          />

          {/* Additional floating elements */}
          <motion.div
            variants={shapeVariants}
            transition={{ delay: 0.6 }}
            className='to-accent-400/20 absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rotate-[15deg] rounded-2xl border border-green-400/20 bg-gradient-to-br from-green-400/20 backdrop-blur-sm'
          />
        </motion.div>
      </Container>
    </Section>
  );
};

FeaturesSection.displayName = "FeaturesSection";

export { FeaturesSection };
