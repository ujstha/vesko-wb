import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import type { SupportedLanguages } from "@/locales/i18n.config";
import { getLocalizedPath } from "@/routes/helpers/localization";
import { WaitlistForm } from "@/shared/components/common/WaitlistForm";
import { Button } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const CTASection = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const navigateToRegister = () =>
    navigate(getLocalizedPath("register", i18n.language as SupportedLanguages));

  const ctaCardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section
      className='to-accent-800 relative min-h-[50vh] bg-gradient-to-b from-black'
      aria-labelledby='cta-heading'
    >
      <Container>
        <div className='mx-auto max-w-3xl text-center'>
          <Text as='h2' variant='heading' className='mb-16 text-white' id='cta-heading'>
            {t("home.cta.heading")}
          </Text>

          <div className='space-y-8'>
            <motion.div
              variants={ctaCardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: "-15%" }}
              className='rounded-xl bg-white/10 px-8 py-12 backdrop-blur-lg'
            >
              <div className='mb-6 flex items-center justify-center gap-3'>
                <i className={`${RemixIcons.email} text-accent-500 text-2xl`} />
                <Text className='text-white lg:!text-xl'>{t("home.cta.waitlist.title")}</Text>
              </div>
              <WaitlistForm />
            </motion.div>

            <motion.div
              variants={ctaCardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: "-15%" }}
              transition={{ delay: 0.2 }}
              className='rounded-xl bg-white/10 px-8 py-12 backdrop-blur-lg'
            >
              <div className='mb-6 flex items-center justify-center gap-3'>
                <i className={`${RemixIcons.userCommunity} text-accent-500 text-2xl`} />
                <Text className='text-white lg:!text-xl'>{t("home.cta.merchant.title")}</Text>
              </div>
              <Button
                aria-label={t("home.cta.merchant.buttonText")}
                containerClassName='bg-accent-500 hover:bg-accent-600 rounded-lg px-8 py-3'
                textClassName='text-white'
                onClick={() => void navigateToRegister()}
              >
                {t("home.cta.merchant.buttonText")}
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { CTASection };
