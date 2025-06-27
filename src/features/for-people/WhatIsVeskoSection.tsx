import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";

const WhatIsVeskoSection: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    "forPeople.whatIsVesko.items.item1",
    "forPeople.whatIsVesko.items.item2",
    "forPeople.whatIsVesko.items.item3",
    "forPeople.whatIsVesko.items.item4",
    "forPeople.whatIsVesko.items.item5",
  ];

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };

  return (
    <Section className='from-accent-50 relative bg-gradient-to-br to-blue-50'>
      <Container>
        <div className='px-4 py-16'>
          <div className='flex flex-col md:flex-row md:gap-16'>
            {/* Sticky Left Title */}
            <div className='mb-8 md:mb-0 md:w-1/3'>
              <div className='md:sticky md:top-32'>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <Text
                    as='h2'
                    variant='heading'
                    className='text-4xl font-bold md:text-5xl lg:text-6xl'
                  >
                    {t("forPeople.whatIsVesko.title.line1")}
                    <br />
                    {t("forPeople.whatIsVesko.title.line2")}
                  </Text>
                </motion.div>
              </div>
            </div>

            <div className='flex flex-col gap-8 md:min-h-[100vh] md:w-2/3'>
              {items.map((text, idx) => (
                <motion.div
                  key={idx}
                  className='flex min-h-44 items-start gap-6 rounded-xl border border-white/20 bg-white/80 px-8 py-8 backdrop-blur-sm'
                  variants={itemVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, margin: "-10%" }}
                  custom={idx}
                >
                  <motion.span
                    className='text-accent-600 w-12 flex-shrink-0 text-3xl font-light'
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: idx * 0.2 + 0.3,
                    }}
                  >
                    {`0${idx + 1}`}
                  </motion.span>
                  <motion.span
                    className='text-xl leading-relaxed text-gray-800 lg:text-2xl'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: idx * 0.2 + 0.4,
                    }}
                  >
                    {t(text)}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { WhatIsVeskoSection };
