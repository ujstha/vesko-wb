import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { StackScrollCards } from "@/shared/components/ui/animated/StackScrollCards";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const HowVeskosWorkSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: "01",
      title: "Sign up",
      description:
        "Choose a suitable subscription plan (coming soon), register, and create your profile and store.",
      icon: RemixIcons.signup,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "02",
      title: "List Products",
      description:
        "Add your inventory to your store in Vesko, use or adjust the built-in product categorising.",
      icon: RemixIcons.list,
      color: "from-green-500 to-green-600",
    },
    {
      step: "03",
      title: "Sell",
      description:
        "Once you press the list, products will be available in your store for your customers, your followers will see your new product in their home feed.",
      icon: RemixIcons.sell,
      color: "from-purple-500 to-purple-600",
    },
  ];

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

  const headerVariants = {
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

  const renderStepCard = (step: (typeof steps)[0], index: number) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className='relative h-[400px] w-full overflow-hidden rounded-2xl bg-white p-8 shadow-xl'
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`} />

      {/* Step number */}
      <div className='absolute top-6 right-6'>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-lg font-bold text-white`}
        >
          {step.step}
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex h-full flex-col justify-center'>
        {/* Icon */}
        <motion.div
          className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${step.color} text-white shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <i className={`${step.icon} text-2xl`} />
        </motion.div>

        {/* Title */}
        <Text as='h3' variant='title' className='mb-4 text-2xl font-bold text-gray-900'>
          {step.title}
        </Text>

        {/* Description */}
        <Text className='leading-relaxed text-gray-600'>{step.description}</Text>

        {/* Decorative elements */}
        <div className='absolute bottom-4 left-4 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30' />
        <div className='absolute top-1/2 right-4 h-3 w-3 rounded-full bg-gradient-to-r from-green-400/30 to-blue-400/30' />
      </div>
    </motion.div>
  );

  return (
    <Section className='relative bg-gradient-to-br from-slate-50 to-slate-100 py-24'>
      {/* Background decorative elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className='absolute top-20 left-10 h-8 w-8 rounded-full bg-blue-400/20'
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className='absolute right-10 bottom-20 h-6 w-6 rounded-full bg-purple-400/20'
        />
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className='absolute top-1/2 left-20 h-4 w-4 rounded-full bg-green-400/20'
        />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mx-auto max-w-4xl'
        >
          {/* Section Header */}
          <motion.div variants={headerVariants} className='mb-16 text-center'>
            <Text
              as='h2'
              variant='heading'
              className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
            >
              How It Works
            </Text>
          </motion.div>

          {/* Steps */}
          <div className='mb-16'>
            <StackScrollCards items={steps} renderCard={renderStepCard} gap={24} topOffset={120} />
          </div>

          {/* Bottom Message */}
          <motion.div variants={headerVariants} className='text-center'>
            <Text as='h3' variant='title' className='text-3xl font-bold text-gray-900 md:text-4xl'>
              Yes it's that easy! 😎
            </Text>
            <Text className='mt-4 text-lg text-gray-600'>Get started in minutes, not days</Text>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { HowVeskosWorkSection };
