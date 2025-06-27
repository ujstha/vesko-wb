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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <Section className='bg-gradient-to-br from-white to-gray-50 py-20'>
      <Container>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='mx-auto max-w-6xl'
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className='mb-16 text-center'>
            <Text
              as='h2'
              variant='heading'
              className='text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
            >
              {t("about.why.title")}
            </Text>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className='via-accent-400 mx-auto mt-6 h-1 bg-gradient-to-r from-transparent to-transparent'
            />
          </motion.div>

          {/* Mission Statement */}
          <motion.div variants={itemVariants} className='mb-12 text-center'>
            <div className='mx-auto max-w-4xl'>
              <Text
                variant='title'
                className='text-lg font-semibold text-gray-800 md:text-xl lg:text-2xl'
              >
                {t("about.why.mission")}
              </Text>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
            {/* Left Column - Problem */}
            <motion.div variants={cardVariants} className='group'>
              <div className='relative h-full rounded-2xl border-2 border-red-100 bg-gradient-to-br from-red-50 to-orange-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
                {/* Background gradient overlay */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-5' />

                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className='relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg'
                >
                  <i className={`${RemixIcons.problem} text-2xl`} />
                </motion.div>

                {/* Content */}
                <div className='relative'>
                  <Text variant='title' className='mb-4 text-xl font-semibold text-gray-900'>
                    {t("about.why.problem.title")}
                  </Text>
                  <Text className='leading-relaxed text-gray-700'>
                    {t("about.why.problem.description")}
                  </Text>
                </div>

                {/* Decorative element */}
                <div className='absolute -right-2 -bottom-2 h-8 w-8 rounded-full bg-gradient-to-br from-red-200 to-orange-200 opacity-20' />
              </div>
            </motion.div>

            {/* Right Column - Solution */}
            <motion.div variants={cardVariants} className='group'>
              <div className='from-accent-50 border-accent-100 relative h-full rounded-2xl border-2 bg-gradient-to-br to-blue-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
                {/* Background gradient overlay */}
                <div className='from-accent-500 absolute inset-0 rounded-2xl bg-gradient-to-br to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-5' />

                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className='from-accent-500 relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br to-blue-500 text-white'
                >
                  <i className={`${RemixIcons.solution} text-2xl`} />
                </motion.div>

                {/* Content */}
                <div className='relative'>
                  <Text variant='title' className='text-accent-800 mb-4 text-xl font-semibold'>
                    {t("about.why.solution.title")}
                  </Text>
                  <Text className='leading-relaxed text-gray-700'>
                    {t("about.why.solution.description")}
                  </Text>
                  <Text className='mt-4 leading-relaxed text-gray-700'>
                    {t("about.why.solution.additional")}
                  </Text>
                </div>

                {/* Decorative element */}
                <div className='from-accent-200 absolute -right-2 -bottom-2 h-8 w-8 rounded-full bg-gradient-to-br to-blue-200 opacity-20' />
              </div>
            </motion.div>
          </div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className='mt-16 flex justify-center'
          >
            <div className='flex space-x-4'>
              <div className='bg-accent-400 h-3 w-3 rounded-full' />
              <div className='h-3 w-3 rounded-full bg-blue-400' />
              <div className='h-3 w-3 rounded-full bg-purple-400' />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { WhySection };
