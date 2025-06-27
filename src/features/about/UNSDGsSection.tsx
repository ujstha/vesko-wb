import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const UNSDGsSection = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const sdgGoals = [
    {
      id: 8,
      titleKey: "about.unSDGs.goals.sdg8.title",
      descriptionKey: "about.unSDGs.goals.sdg8.description",
      icon: RemixIcons.sdg8,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      gradient: "from-blue-400 to-blue-500",
    },
    {
      id: 9,
      titleKey: "about.unSDGs.goals.sdg9.title",
      descriptionKey: "about.unSDGs.goals.sdg9.description",
      icon: RemixIcons.sdg9,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      gradient: "from-orange-400 to-orange-500",
    },
    {
      id: 10,
      titleKey: "about.unSDGs.goals.sdg10.title",
      descriptionKey: "about.unSDGs.goals.sdg10.description",
      icon: RemixIcons.sdg10,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      gradient: "from-red-400 to-red-500",
    },
    {
      id: 11,
      titleKey: "about.unSDGs.goals.sdg11.title",
      descriptionKey: "about.unSDGs.goals.sdg11.description",
      icon: RemixIcons.sdg11,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      gradient: "from-yellow-400 to-yellow-500",
    },
    {
      id: 12,
      titleKey: "about.unSDGs.goals.sdg12.title",
      descriptionKey: "about.unSDGs.goals.sdg12.description",
      icon: RemixIcons.sdg12,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      gradient: "from-green-400 to-green-500",
    },
    {
      id: 13,
      titleKey: "about.unSDGs.goals.sdg13.title",
      descriptionKey: "about.unSDGs.goals.sdg13.description",
      icon: RemixIcons.sdg13,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      gradient: "from-teal-400 to-teal-500",
    },
    {
      id: 17,
      titleKey: "about.unSDGs.goals.sdg17.title",
      descriptionKey: "about.unSDGs.goals.sdg17.description",
      icon: RemixIcons.sdg17,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      gradient: "from-purple-400 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <Section className='bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20'>
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
            {t("about.unSDGs.title")}
          </Text>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className='mx-auto mt-6 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent'
          />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='mb-16 text-center'
        >
          <div className='mx-auto max-w-4xl'>
            <Text className='text-lg leading-relaxed text-gray-700 md:text-xl'>
              {t("about.unSDGs.introduction")}
            </Text>
          </div>
        </motion.div>

        {/* SDG Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        >
          {sdgGoals.map((goal, index) => (
            <motion.div
              key={goal.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`group relative overflow-hidden rounded-2xl border-2 ${goal.bgColor} ${goal.borderColor} p-6 transition-all duration-300 hover:shadow-xl`}
            >
              {/* Background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${goal.color} rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              />

              {/* Icon and SDG Number */}
              <div className='relative mb-4 flex items-center justify-between'>
                <motion.div
                  variants={iconVariants}
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${goal.gradient} text-white shadow-lg`}
                >
                  <i className={`${goal.icon} text-xl`} />
                </motion.div>

                {/* Large faded SDG number */}
                <div className='text-6xl font-bold text-gray-200 select-none'>{goal.id}</div>
              </div>

              {/* Content */}
              <div className='relative'>
                <Text variant='subheading' className='mb-3 text-lg font-bold text-gray-900'>
                  {t(goal.titleKey)}
                </Text>
                <Text className='text-sm leading-relaxed text-gray-700'>
                  {t(goal.descriptionKey)}
                </Text>
              </div>

              {/* Hover effect line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: hoveredCard === index ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${goal.gradient} rounded-b-2xl`}
              />

              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`absolute -right-2 -bottom-2 h-6 w-6 rounded-full bg-gradient-to-br ${goal.gradient} opacity-20`}
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
          <div className='mx-auto max-w-3xl'>
            <Text className='text-lg leading-relaxed text-gray-700'>
              {t("about.unSDGs.conclusion")}
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
          <div className='absolute top-20 left-10 h-4 w-4 animate-pulse rounded-full bg-green-300 opacity-30' />
          <div className='absolute top-40 right-20 h-6 w-6 animate-pulse rounded-full bg-blue-300 opacity-30 delay-1000' />
          <div className='absolute bottom-20 left-1/4 h-3 w-3 animate-pulse rounded-full bg-purple-300 opacity-30 delay-2000' />
          <div className='absolute right-1/3 bottom-40 h-5 w-5 animate-pulse rounded-full bg-teal-300 opacity-30 delay-1500' />
        </motion.div>
      </Container>
    </Section>
  );
};

export { UNSDGsSection };
