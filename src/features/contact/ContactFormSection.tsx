import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const ContactFormSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement EmailJS integration
    console.log("Form submitted:", formData);
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <Section className='relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20'>
      {/* Background pattern */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800' />
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]' />
        </div>

        {/* Subtle glow effects */}
        <div className='bg-accent-500/5 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl' />
        <div className='bg-accent-500/5 absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full blur-3xl' />
      </div>

      <Container className='relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='mx-auto max-w-6xl'
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='mb-16 text-center'>
            <Text
              as='h2'
              variant='heading'
              className='mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl'
            >
              <span className='to-accent-300 via-accent-200 bg-gradient-to-r from-white bg-clip-text text-transparent'>
                {t("contact.formSection.title")}
              </span>
            </Text>
            <Text className='mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl'>
              {t("contact.formSection.subtitle")}
            </Text>
          </motion.div>

          <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
            {/* Contact Information */}
            <motion.div variants={itemVariants} className='space-y-8'>
              <div>
                <Text
                  as='h3'
                  variant='title'
                  className='mb-6 text-2xl font-bold text-white md:text-3xl'
                >
                  {t("contact.formSection.infoTitle")}
                </Text>
                <Text className='text-lg leading-relaxed text-gray-300 md:text-xl'>
                  {t("contact.formSection.infoDescription")}
                </Text>
              </div>

              {/* Contact details */}
              <div className='space-y-6'>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10'
                >
                  <div className='from-accent-500 to-accent-600 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-lg'>
                    <i className={`${RemixIcons.email} text-lg`} />
                  </div>
                  <div>
                    <Text className='mb-1 font-semibold text-white'>
                      {t("contact.contactInfo.email.label")}
                    </Text>
                    <Text className='text-gray-300'>{t("contact.contactInfo.email.address")}</Text>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10'
                >
                  <div className='from-accent-500 to-accent-600 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-lg'>
                    <i className={`${RemixIcons.phone} text-lg`} />
                  </div>
                  <div>
                    <Text className='mb-1 font-semibold text-white'>
                      {t("contact.contactInfo.phone.label")}
                    </Text>
                    <Text className='text-gray-300'>{t("contact.contactInfo.phone.number")}</Text>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className='flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'>
                    <i className={`${RemixIcons.location} text-lg`} />
                  </div>
                  <div>
                    <Text className='mb-1 font-semibold text-white'>
                      {t("contact.contactInfo.location.label")}
                    </Text>
                    <Text className='text-gray-300'>
                      {t("contact.contactInfo.location.address")}
                    </Text>
                  </div>
                </motion.div>
              </div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='border-t border-white/10 pt-6'
              >
                <Text className='mb-4 text-sm text-gray-400'>
                  {t("contact.trustIndicators.title")}
                </Text>
                <div className='grid grid-cols-2 gap-3'>
                  <div className='flex items-center gap-2 text-sm text-gray-300'>
                    <div className='h-2 w-2 rounded-full bg-green-400' />
                    <span>{t("contact.trustIndicators.support")}</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-300'>
                    <div className='h-2 w-2 rounded-full bg-blue-400' />
                    <span>{t("contact.trustIndicators.response")}</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-300'>
                    <div className='bg-accent-400 h-2 w-2 rounded-full' />
                    <span>{t("contact.trustIndicators.secure")}</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-300'>
                    <div className='bg-accent-400 h-2 w-2 rounded-full' />
                    <span>{t("contact.trustIndicators.expert")}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={formVariants} className='relative'>
              <div className='relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 p-8 shadow-2xl backdrop-blur-xl'>
                {/* Form glow effect */}
                <div className='to-accent-500/10 from-accent-500/10 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-500 hover:opacity-100' />

                <form onSubmit={handleSubmit} className='relative space-y-6'>
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor='full_name'
                      className='mb-2 block text-sm font-semibold text-white'
                    >
                      {t("contact.form.fullName")} *
                    </label>
                    <input
                      type='text'
                      id='full_name'
                      name='full_name'
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                      className='focus:border-accent-400 w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:bg-white/15 focus:outline-none'
                      placeholder={t("contact.form.fullNamePlaceholder")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor='email' className='mb-2 block text-sm font-semibold text-white'>
                      {t("contact.form.email")} *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='focus:border-accent-400 w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:bg-white/15 focus:outline-none'
                      placeholder={t("contact.form.emailPlaceholder")}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor='phone' className='mb-2 block text-sm font-semibold text-white'>
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='focus:border-accent-400 w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:bg-white/15 focus:outline-none'
                      placeholder={t("contact.form.phonePlaceholder")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor='message'
                      className='mb-2 block text-sm font-semibold text-white'
                    >
                      {t("contact.form.message")} *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className='focus:border-accent-400 w-full resize-none rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:bg-white/15 focus:outline-none'
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type='submit'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='to-accent-600 hover:to-accent-700 from-accent-600 hover:from-accent-700 focus:ring-accent-500/30 w-full rounded-xl bg-gradient-to-r px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 focus:ring-4 focus:outline-none'
                  >
                    {t("contact.form.submit")}
                  </motion.button>

                  {/* Form note */}
                  <Text className='text-center text-xs text-gray-400'>
                    {t("contact.form.note")}
                  </Text>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { ContactFormSection };
