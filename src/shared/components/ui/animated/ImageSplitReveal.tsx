import { motion } from "framer-motion";

import { Assets } from "@/shared/constants/assets";

const containerVariants = {
  hidden: {},
  show: {},
};

const fromTop = {
  hidden: {
    y: "-100%",
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top",
  },
  show: {
    y: "0%",
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const fromBottom = {
  hidden: {
    y: "100%",
    opacity: 0,
    scaleY: 0,
    transformOrigin: "bottom",
  },
  show: {
    y: "0%",
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
};

const ImageSplitReveal = () => {
  return (
    <motion.div
      className='relative mx-auto flex h-[600px] w-full overflow-hidden md:h-[800px]'
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className='hidden h-full w-1/3 object-cover md:block' variants={fromTop}>
        <img src={Assets.veskoBg1} alt='Left' className='h-full w-full object-cover' />
      </motion.div>

      <motion.div className='h-full w-full object-cover md:w-1/3' variants={fadeIn}>
        <img src={Assets.veskoBg2} alt='Center' className='h-full w-full object-cover' />
      </motion.div>

      <motion.div className='hidden h-full w-1/3 object-cover md:block' variants={fromBottom}>
        <img src={Assets.veskoBg3} alt='Right' className='h-full w-full object-cover' />
      </motion.div>
    </motion.div>
  );
};

ImageSplitReveal.displayName = "ImageSplitReveal";

export { ImageSplitReveal };
