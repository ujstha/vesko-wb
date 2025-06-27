import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const OurValuesSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: RemixIcons.empathy,
      titleKey: "about.ourValues.empathy.title",
      descriptionKey: "about.ourValues.empathy.description",
      color: "from-pink-500 to-red-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: RemixIcons.peace,
      titleKey: "about.ourValues.peace.title",
      descriptionKey: "about.ourValues.peace.description",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: RemixIcons.friendliness,
      titleKey: "about.ourValues.friendliness.title",
      descriptionKey: "about.ourValues.friendliness.description",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: RemixIcons.neutrality,
      titleKey: "about.ourValues.neutrality.title",
      descriptionKey: "about.ourValues.neutrality.description",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
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
    <Section className='bg-gradient-to-br from-gray-50 to-white py-20'>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-16 text-center'
        >
          <Text
            as='h2'
            variant='heading'
            className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
          >
            {t("about.ourValues.title")}
          </Text>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className='via-accent-400 mx-auto mt-6 h-1 bg-gradient-to-r from-transparent to-transparent'
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'
        >
          {values.map((value, index) => (
            <motion.div
              key={value.titleKey}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className={`group relative overflow-hidden rounded-2xl border-2 ${value.bgColor} ${value.borderColor} p-8 transition-all duration-300 hover:shadow-xl`}
            >
              {/* Background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              />

              {/* Icon */}
              <motion.div
                variants={iconVariants}
                className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${value.color} text-white shadow-lg`}
              >
                <i className={`${value.icon} text-2xl`} />
                {/* Fallback icon if the main icon doesn't load */}
                <i className='ri-check-line text-2xl' style={{ display: "none" }} />
              </motion.div>

              {/* Content */}
              <div className='relative'>
                <Text variant='subheading' className='mb-4 text-xl font-bold text-gray-900'>
                  {t(value.titleKey)}
                </Text>
                <Text className='leading-relaxed text-gray-700'>{t(value.descriptionKey)}</Text>
              </div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className='absolute -right-2 -bottom-2 h-8 w-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 opacity-20'
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='mt-16 text-center'
        >
          <div className='mx-auto max-w-2xl'>
            <Text className='text-lg leading-relaxed text-gray-600'>
              {t("about.ourValues.conclusion")}
            </Text>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className='pointer-events-none absolute inset-0 overflow-hidden'
        >
          <div className='absolute top-20 left-10 h-4 w-4 animate-pulse rounded-full bg-pink-300 opacity-30' />
          <div className='absolute top-40 right-20 h-6 w-6 animate-pulse rounded-full bg-blue-300 opacity-30 delay-1000' />
          <div className='absolute bottom-20 left-1/4 h-3 w-3 animate-pulse rounded-full bg-green-300 opacity-30 delay-2000' />
          <div className='absolute right-1/3 bottom-40 h-5 w-5 animate-pulse rounded-full bg-purple-300 opacity-30 delay-1500' />
        </motion.div>
      </Container>
    </Section>
  );
};

export { OurValuesSection };
