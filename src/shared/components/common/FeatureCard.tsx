import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { motion } from "framer-motion";

import type { RemixIconName } from "@/shared/constants/icons";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: RemixIconName;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  index?: number;
}

export const FeatureCard = ({
  title,
  description,
  icon,
  buttonText,
  buttonLink,
  className = "",
  index = 0,
}: FeatureCardProps) => {
  const cardVariants = {
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
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: "-10%" }}
      className={`group relative overflow-hidden rounded-xl bg-white p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${className}`}
      role='article'
      aria-labelledby={`feature-title-${index}`}
    >
      <div className='flex h-full flex-col items-start justify-between gap-6 transition-transform duration-300 group-hover:scale-[1.02]'>
        <div className='space-y-4'>
          {icon && <i className={`${icon} text-accent-600 text-5xl`} />}
          <Text as='h3' variant='subheading' id={`feature-title-${index}`}>
            {title}
          </Text>
          <Text color='secondary'>{description}</Text>
        </div>
        {buttonText && buttonLink && (
          <Button aria-label={`Learn more about ${title}`}>{buttonText}</Button>
        )}
      </div>
    </motion.div>
  );
};
