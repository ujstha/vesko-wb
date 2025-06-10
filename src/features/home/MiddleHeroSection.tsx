import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import { ImageSplitReveal } from "@/shared/components/ui/animated/ImageSplitReveal";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";

const MiddleHeroSection = () => {
  const ref = useRef(null);

  // Scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers when element enters and exits viewport
  });

  // Translate the section slower than scroll speed
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <Section ref={ref} className='relative h-[600px] overflow-hidden md:h-[800px]'>
      <motion.div style={{ y }} className='absolute inset-0 z-0'>
        <ImageSplitReveal />
        <div className='absolute inset-0 bg-black/60' />
      </motion.div>

      <div className='relative z-10 flex h-full items-center justify-center px-4 text-center text-white'>
        <div className='w-full xl:w-4/5'>
          <div className='relative h-full w-full bg-blue-300'>
            <Text
              variant='heading'
              className='text-default-white absolute bottom-0 left-0 !text-4xl lg:!text-8xl xl:!text-[8rem]'
            >
              Yes! Vesko is
            </Text>
            <Text
              variant='heading'
              className='text-accent-400 absolute top-0 right-0 !text-4xl lg:!text-8xl xl:!text-[8rem]'
            >
              a social media
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
};

MiddleHeroSection.displayName = "MiddleHeroSection";

export { MiddleHeroSection };
