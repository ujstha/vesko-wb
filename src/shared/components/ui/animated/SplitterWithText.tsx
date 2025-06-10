import { motion } from "framer-motion";
import type React from "react";

import { cn } from "@/shared/utils/cn";

const lineVariantLeft = {
  hidden: { width: 0, opacity: 0 },
  show: {
    width: "100%",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const lineVariantRight = {
  hidden: { width: 0, opacity: 0 },
  show: {
    width: "100%",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

interface SplitterWithTextProps {
  className?: string;
}

const SplitterWithText: React.FC<SplitterWithTextProps> = ({ className }) => {
  return (
    <div className={cn("flex w-full items-center justify-center gap-4 px-4", className)}>
      {/* Left Line */}
      <motion.div
        className='h-px flex-1 bg-gradient-to-r from-transparent to-neutral-300'
        variants={lineVariantLeft}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* Text */}
      <div className='font-medium'>because</div>

      {/* Right Line */}
      <motion.div
        className='h-px flex-1 bg-gradient-to-l from-transparent to-neutral-300'
        variants={lineVariantRight}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.5 }}
      />
    </div>
  );
};

export { SplitterWithText };
