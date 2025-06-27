import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";
import { RemixIcons } from "@/shared/constants/icons";

const OrderSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: "01",
      title: "View Order",
      description:
        "Receive and review incoming orders through your dashboard with all customer details and requirements.",
      icon: RemixIcons.order,
      color: "from-blue-500 to-blue-600",
      image: Assets.storeDashboard,
    },
    {
      step: "02",
      title: "Print Shipping Label",
      description:
        "Generate and print shipping labels automatically with all necessary information for seamless delivery.",
      icon: RemixIcons.print,
      color: "from-green-500 to-green-600",
      image: Assets.shippingLabel,
    },
    {
      step: "03",
      title: "Send Out For Delivery",
      description:
        "Hand over your package to our trusted delivery partners and track the entire journey in real-time.",
      icon: RemixIcons.delivery,
      color: "from-purple-500 to-purple-600",
      image: Assets.deliveryTruck,
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

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

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
          className='mx-auto max-w-6xl'
        >
          {/* Section Header */}
          <motion.div variants={headerVariants} className='mb-16 text-center'>
            <Text
              as='h2'
              variant='heading'
              className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
            >
              How Online Order Fulfilment Works
            </Text>
          </motion.div>

          {/* Steps */}
          <div className='grid gap-12 md:grid-cols-3'>
            {steps.map((step, index) => (
              <motion.div key={step.step} variants={stepVariants} className='group relative'>
                {/* Step Card */}
                <div className='relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl'>
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
                  <div className='relative z-10'>
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
                    <Text className='mb-6 leading-relaxed text-gray-600'>{step.description}</Text>

                    {/* Image */}
                    <div className='relative overflow-hidden rounded-xl'>
                      <Image
                        src={step.image}
                        alt={step.title}
                        className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    variants={floatingVariants}
                    animate='animate'
                    transition={{ delay: index * 0.5 }}
                    className='absolute -top-2 -right-2 h-4 w-4 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30'
                  />
                </div>

                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className='absolute top-1/2 -right-6 hidden h-0.5 w-12 bg-gradient-to-r from-gray-300 to-transparent md:block' />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div variants={headerVariants} className='mt-16 text-center'>
            <Text as='h3' variant='title' className='text-3xl font-bold text-gray-900 md:text-4xl'>
              Yes it's that easy too! "Designed For you" isn't a buzzword 😎!
            </Text>
            <Text className='mt-4 text-lg text-gray-600'>
              Streamlined process that saves you time and effort
            </Text>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={headerVariants}
            className='mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500'
          >
            <div className='flex items-center gap-2'>
              <i className={`${RemixIcons.check} text-green-500`} />
              <span>Automated shipping labels</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className={`${RemixIcons.check} text-green-500`} />
              <span>Real-time tracking</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className={`${RemixIcons.check} text-green-500`} />
              <span>Trusted delivery partners</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { OrderSection };
