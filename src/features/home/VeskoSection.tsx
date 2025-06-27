import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const VeskoSection = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const veskoData = [
    {
      image: Assets.safePlace,
      title: t("home.vesko.safePlace.title"),
      description: t("home.vesko.safePlace.description"),
      color: "from-green-400/20 to-emerald-400/20",
      borderColor: "border-green-400/30",
    },
    {
      image: Assets.neutral,
      title: t("home.vesko.neutral.title"),
      description: t("home.vesko.neutral.description"),
      color: "from-blue-400/20 to-indigo-400/20",
      borderColor: "border-blue-400/30",
    },
    {
      image: Assets.connected,
      title: t("home.vesko.connected.title"),
      description: t("home.vesko.connected.description"),
      color: "from-purple-400/20 to-violet-400/20",
      borderColor: "border-purple-400/30",
    },
  ];

  return (
    <Section className='relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20'>
      {/* Background decorative elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className='bg-accent-400/20 absolute top-20 left-10 h-4 w-4 rounded-full'
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className='absolute top-40 right-20 h-6 w-6 rounded-full bg-blue-400/20'
        />
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className='absolute bottom-20 left-1/4 h-3 w-3 rounded-full bg-purple-400/20'
        />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='grid grid-cols-1 gap-8 md:grid-cols-3'
        >
          {veskoData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className={`group relative overflow-hidden rounded-2xl border ${item.borderColor} bg-gradient-to-br ${item.color} p-6 transition-all duration-300 hover:shadow-xl`}
            >
              {/* Image */}
              <motion.div variants={imageVariants} className='mb-6 overflow-hidden rounded-xl'>
                <Image
                  src={item.image}
                  className='h-[30rem] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[20rem] lg:h-[30rem]'
                  alt={item.title}
                />
                {/* Image overlay on hover */}
                <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10' />
              </motion.div>

              {/* Content */}
              <motion.div variants={textVariants}>
                <Text
                  variant='title'
                  className='group-hover:text-accent-600 mb-3 text-xl font-bold text-gray-900 transition-colors duration-300'
                >
                  {item.title}
                </Text>
                <Text className='leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-gray-800'>
                  {item.description}
                </Text>
              </motion.div>

              {/* Hover effect line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className='from-accent-400 absolute bottom-0 left-0 h-1 bg-gradient-to-r to-purple-400'
              />

              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`absolute -right-2 -bottom-2 h-6 w-6 rounded-full bg-gradient-to-br ${item.color.replace("/20", "/40")} opacity-60`}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

VeskoSection.displayName = "VeskoSection";

export { VeskoSection };
