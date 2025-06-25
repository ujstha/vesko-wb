import { motion } from "framer-motion";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";
import { cn } from "@/shared/utils/cn";

const TRMD_IMAGES = [
  Assets.tRmd1,
  Assets.tRmd2,
  Assets.tRmd3,
  Assets.tRmd4,
  Assets.tRmd5,
  Assets.tRmd6,
];

const BRMD_IMAGES = [
  Assets.bRmd1,
  Assets.bRmd2,
  Assets.bRmd3,
  Assets.bRmd4,
  Assets.bRmd5,
  Assets.bRmd6,
];

const RealMeetDigitalSection = () => {
  return (
    <Section className='overflow-hidden bg-black'>
      <div className='flex flex-col justify-center gap-4'>
        <motion.div
          className='flex h-[200px] lg:h-[440px]'
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...TRMD_IMAGES, ...TRMD_IMAGES].map((image, index) => (
            <div
              key={`top-${index}`}
              className='relative mr-2 h-full w-[150px] flex-shrink-0 sm:w-[180px] md:w-[220px] lg:mr-4 lg:w-[calc(100vw/6)]'
            >
              <Image
                src={image}
                alt={`Real meets digital ${index + 1}`}
                className='h-full rounded-lg'
                objectFit='cover'
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          className='flex h-[200px] lg:h-[440px]'
          initial={{ x: "-100%" }}
          animate={{
            x: ["-100%", "0%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...BRMD_IMAGES, ...BRMD_IMAGES].map((image, index) => (
            <div
              key={`bottom-${index}`}
              className='relative mr-2 h-full w-[150px] flex-shrink-0 sm:w-[180px] md:w-[220px] lg:mr-4 lg:w-[calc(100vw/6)]'
            >
              <Image
                src={image}
                alt={`Real meets digital ${index + 1}`}
                className='h-full rounded-lg'
                objectFit='cover'
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className='absolute inset-0 bg-black/60' />

      <Container className='absolute inset-0 z-10 grid place-content-center'>
        <div className='mx-auto max-w-4xl text-center'>
          <Text
            as='h2'
            className={cn(
              "mb-6 text-3xl font-bold text-white md:text-5xl lg:text-6xl",
              "leading-tight"
            )}
          >
            Where Real Meets Digital
          </Text>
          <Text className='mx-auto max-w-3xl text-base leading-relaxed text-white/90 lg:text-xl'>
            With Vesko, we want to create a digital reflection of the real world for you, your
            favorite shops, streets, and people, all connected in one place.
          </Text>
        </div>
      </Container>
    </Section>
  );
};

export { RealMeetDigitalSection };
