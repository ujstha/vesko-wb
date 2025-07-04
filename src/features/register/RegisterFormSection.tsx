import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

interface FormData {
  businessName: string;
  businessId: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  industry: string;
  website?: string;
  description: string;
  expectedLaunch: string;
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}

type FormErrors = Record<string, string>;

const RegisterFormSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    businessId: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    industry: "",
    website: "",
    description: "",
    expectedLaunch: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Business Name validation
    if (!formData.businessName.trim()) {
      newErrors.businessName = t("register.form.validation.businessName.required");
    } else if (formData.businessName.length < 2) {
      newErrors.businessName = t("register.form.validation.businessName.minLength");
    }

    // Business ID validation (Finnish Y-tunnus format)
    if (!formData.businessId.trim()) {
      newErrors.businessId = t("register.form.validation.businessId.required");
    } else if (!/^\d{7}-\d$/.test(formData.businessId)) {
      newErrors.businessId = t("register.form.validation.businessId.format");
    }

    // Contact Person validation
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = t("register.form.validation.contactPerson.required");
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t("register.form.validation.email.required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("register.form.validation.email.format");
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = t("register.form.validation.phone.required");
    } else if (!/^(\+358|0)\s?[0-9]{8,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = t("register.form.validation.phone.format");
    }

    // Business Type validation
    if (!formData.businessType) {
      newErrors.businessType = t("register.form.validation.businessType.required");
    }

    // Industry validation
    if (!formData.industry) {
      newErrors.industry = t("register.form.validation.industry.required");
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = t("register.form.validation.description.required");
    } else if (formData.description.length < 20) {
      newErrors.description = t("register.form.validation.description.minLength");
    }

    // Expected Launch validation
    if (!formData.expectedLaunch) {
      newErrors.expectedLaunch = t("register.form.validation.expectedLaunch.required");
    }

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = t("register.form.validation.agreeToTerms.required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call for MVP
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      console.log("Registration data:", formData);

      // TODO: Send to your database
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitSuccess(true);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          businessName: "",
          businessId: "",
          contactPerson: "",
          email: "",
          phone: "",
          businessType: "",
          industry: "",
          website: "",
          description: "",
          expectedLaunch: "",
          agreeToTerms: false,
          agreeToMarketing: false,
        });
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Registration error:", error);
      setErrors({ submit: t("register.form.validation.submit.error") });
    } finally {
      setIsSubmitting(false);
    }
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

  if (submitSuccess) {
    return (
      <Section className='relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20'>
        <Container className='relative z-10'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className='mx-auto max-w-2xl text-center'
          >
            <div className='mb-8'>
              <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white'>
                <i className={`${RemixIcons.check} text-3xl`} />
              </div>
              <Text
                as='h2'
                variant='heading'
                className='mb-4 text-3xl font-bold text-white md:text-4xl'
              >
                {t("register.success.title")}
              </Text>
              <Text className='text-lg text-gray-300'>{t("register.success.message")}</Text>
            </div>
          </motion.div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className='relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20'>
      {/* Background pattern */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800' />
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]' />
        </div>

        {/* Subtle glow effects */}
        <div className='absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl' />
        <div className='bg-accent-500/5 absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full blur-3xl' />
      </div>

      <Container className='relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-10%" }}
          className='mx-auto max-w-4xl'
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='mb-16 text-center'>
            <Text
              as='h2'
              variant='heading'
              className='mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl'
            >
              <span className='to-accent-300 via-accent-200 bg-gradient-to-r from-white bg-clip-text text-transparent'>
                {t("register.formSection.title")}
              </span>
            </Text>
            <Text className='mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl'>
              {t("register.formSection.subtitle")}
            </Text>
          </motion.div>

          {/* Registration Form */}
          <motion.div variants={formVariants} className='relative'>
            <div className='relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 p-8 shadow-2xl backdrop-blur-xl'>
              {/* Form glow effect */}
              <div className='to-accent-500/10 absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent opacity-0 transition-opacity duration-500 hover:opacity-100' />

              <form onSubmit={(e) => void handleSubmit(e)} className='relative space-y-6'>
                {/* Business Information */}
                <div className='grid gap-6 md:grid-cols-2'>
                  {/* Business Name */}
                  <div>
                    <label
                      htmlFor='businessName'
                      className='mb-2 block text-sm font-semibold text-white'
                    >
                      {t("register.form.businessName")} *
                    </label>
                    <input
                      type='text'
                      id='businessName'
                      name='businessName'
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border-2 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                        errors.businessName
                          ? "border-red-400 focus:border-red-400 focus:bg-white/15"
                          : "focus:border-accent-400 border-white/20 focus:bg-white/15"
                      }`}
                      placeholder={t("register.form.businessNamePlaceholder")}
                    />
                    {errors.businessName && (
                      <Text className='mt-1 text-sm text-red-400'>{errors.businessName}</Text>
                    )}
                  </div>

                  {/* Business ID */}
                  <div>
                    <label
                      htmlFor='businessId'
                      className='mb-2 block text-sm font-semibold text-white'
                    >
                      {t("register.form.businessId")} *
                    </label>
                    <input
                      type='text'
                      id='businessId'
                      name='businessId'
                      value={formData.businessId}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border-2 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                        errors.businessId
                          ? "border-red-400 focus:border-red-400 focus:bg-white/15"
                          : "focus:border-accent-400 border-white/20 focus:bg-white/15"
                      }`}
                      placeholder={t("register.form.businessIdPlaceholder")}
                    />
                    {errors.businessId && (
                      <Text className='mt-1 text-sm text-red-400'>{errors.businessId}</Text>
                    )}
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label
                      htmlFor='contactPerson'
                      className='mb-2 block text-sm font-semibold text-white'
                    >
                      {t("register.form.contactPerson")} *
                    </label>
                    <input
                      type='text'
                      id='contactPerson'
                      name='contactPerson'
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border-2 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                        errors.contactPerson
                          ? "border-red-400 focus:border-red-400 focus:bg-white/15"
                          : "focus:border-accent-400 border-white/20 focus:bg-white/15"
                      }`}
                      placeholder={t("register.form.contactPersonPlaceholder")}
                    />
                    {errors.contactPerson && (
                      <Text className='mt-1 text-sm text-red-400'>{errors.contactPerson}</Text>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor='email' className='mb-2 block text-sm font-semibold text-white'>
                      {t("register.form.email")} *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border-2 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                        errors.email
                          ? "border-red-400 focus:border-red-400 focus:bg-white/15"
                          : "focus:border-accent-400 border-white/20 focus:bg-white/15"
                      }`}
                      placeholder={t("register.form.emailPlaceholder")}
                    />
                    {errors.email && (
                      <Text className='mt-1 text-sm text-red-400'>{errors.email}</Text>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor='phone' className='mb-2 block text-sm font-semibold text-white'>
                      {t("register.form.phone")} *
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border-2 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                        errors.phone
                          ? "border-red-400 focus:border-red-400 focus:bg-white/15"
                          : "focus:border-accent-400 border-white/20 focus:bg-white/15"
                      }`}
                      placeholder={t("register.form.phonePlaceholder")}
                    />
                    {errors.phone && (
                      <Text className='mt-1 text-sm text-red-400'>{errors.phone}</Text>
                    )}
                  </div>

                  {/* Business Type */}
                  <div>
                    <label
                      htmlFor='businessType'
                      className='mb-2 block text-sm font-semibold text-white'
                    >
                      {t("register.form.businessType")} *
                    </label>
                    <select
                      id='businessType'
                      name='businessType'
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className={`[&>option]:hover:bg-accent-600 w-full rounded-xl border-2 bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:outline-none [&>option]:bg-slate-800 [&>option]:text-white ${
                        errors.businessType
                          ? "border-red-400 focus:border-red-400 focus:bg-white/15"
                          : "focus:border-accent-400 border-white/20 focus:bg-white/15"
                      }`}
                    >
                      <option value=''>{t("register.form.businessTypePlaceholder")}</option>
                      <option value='offline'>{t("register.form.businessTypes.offline")}</option>
                      <option value='online'>{t("register.form.businessTypes.online")}</option>
                      <option value='both'>{t("register.form.businessTypes.both")}</option>
                    </select>
                    {errors.businessType && (
                      <Text className='mt-1 text-sm text-red-400'>{errors.businessType}</Text>
                    )}
                  </div>

                  {/* Industry */}
                  <div>
                    <label
                      htmlFor='industry'
                      className='mb-2 block text-sm font-semibold text-white'
                    >
                      {t("register.form.industry")} *
                    </label>
                    <select
                      id='industry'
                      name='industry'
                      value={formData.industry}
                      onChange={handleInputChange}
                      className={`[&>option]:hover:bg-accent-600 w-full rounded-xl border-2 bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:outline-none [&>option]:bg-slate-800 [&>option]:text-white ${
                        errors.industry
                          ? "border-red-400 focus:border-red-400 focus:bg-white/15"
                          : "focus:border-accent-400 border-white/20 focus:bg-white/15"
                      }`}
                    >
                      <option value=''>{t("register.form.industryPlaceholder")}</option>
                      <option value='fashion'>{t("register.form.industries.fashion")}</option>
                      <option value='electronics'>
                        {t("register.form.industries.electronics")}
                      </option>
                      <option value='food'>{t("register.form.industries.food")}</option>
                      <option value='home'>{t("register.form.industries.home")}</option>
                      <option value='beauty'>{t("register.form.industries.beauty")}</option>
                      <option value='sports'>{t("register.form.industries.sports")}</option>
                      <option value='other'>{t("register.form.industries.other")}</option>
                    </select>
                    {errors.industry && (
                      <Text className='mt-1 text-sm text-red-400'>{errors.industry}</Text>
                    )}
                  </div>

                  {/* Website */}
                  <div>
                    <label
                      htmlFor='website'
                      className='mb-2 block text-sm font-semibold text-white'
                    >
                      {t("register.form.website")}
                    </label>
                    <input
                      type='url'
                      id='website'
                      name='website'
                      value={formData.website}
                      onChange={handleInputChange}
                      className='focus:border-accent-400 w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:bg-white/15 focus:outline-none'
                      placeholder={t("register.form.websitePlaceholder")}
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor='description'
                    className='mb-2 block text-sm font-semibold text-white'
                  >
                    {t("register.form.description")} *
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full resize-none rounded-xl border-2 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                      errors.description
                        ? "border-red-400 focus:border-red-400 focus:bg-white/15"
                        : "focus:border-accent-400 border-white/20 focus:bg-white/15"
                    }`}
                    placeholder={t("register.form.descriptionPlaceholder")}
                  />
                  {errors.description && (
                    <Text className='mt-1 text-sm text-red-400'>{errors.description}</Text>
                  )}
                </div>

                {/* Checkboxes */}
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <input
                      type='checkbox'
                      id='agreeToTerms'
                      name='agreeToTerms'
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className='text-accent-600 focus:ring-accent-500 mt-1 h-4 w-4 rounded border-gray-300'
                    />
                    <label htmlFor='agreeToTerms' className='text-sm text-gray-300'>
                      {t("register.form.agreeToTerms")} *
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <Text className='ml-7 text-sm text-red-400'>{errors.agreeToTerms}</Text>
                  )}

                  <div className='flex items-start gap-3'>
                    <input
                      type='checkbox'
                      id='agreeToMarketing'
                      name='agreeToMarketing'
                      checked={formData.agreeToMarketing}
                      onChange={handleInputChange}
                      className='text-accent-600 focus:ring-accent-500 mt-1 h-4 w-4 rounded border-gray-300'
                    />
                    <label htmlFor='agreeToMarketing' className='text-sm text-gray-300'>
                      {t("register.form.agreeToMarketing")}
                    </label>
                  </div>
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <div className='rounded-xl border border-red-400/20 bg-red-500/10 p-4'>
                    <Text className='text-center text-red-400'>{errors.submit}</Text>
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className='to-accent-600 hover:to-accent-700 from-accent-600 hover:from-accent-700 focus:ring-accent-500/30 w-full rounded-xl bg-gradient-to-r px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 focus:ring-4 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
                >
                  {isSubmitting ? (
                    <div className='flex items-center justify-center gap-2'>
                      <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent' />
                      {t("register.form.submitting")}
                    </div>
                  ) : (
                    t("register.form.submit")
                  )}
                </motion.button>

                {/* Form note */}
                <Text className='text-center text-xs text-gray-400'>{t("register.form.note")}</Text>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { RegisterFormSection };
