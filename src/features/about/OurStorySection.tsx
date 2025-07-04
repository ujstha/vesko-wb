import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { StackScrollCards } from "@/shared/components/ui/animated/StackScrollCards";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";

const OurStorySection = () => {
  const { t } = useTranslation();

  const storyData = [
    {
      year: "2019",
      locationKey: "about.ourStory.timeline.beginning.location",
      titleKey: "about.ourStory.timeline.beginning.title",
      contentKey: "about.ourStory.timeline.beginning.content",
    },
    {
      year: "2019",
      locationKey: "about.ourStory.timeline.realization.location",
      titleKey: "about.ourStory.timeline.realization.title",
      contentKey: "about.ourStory.timeline.realization.content",
    },
    {
      year: "2020",
      locationKey: "about.ourStory.timeline.problem.location",
      titleKey: "about.ourStory.timeline.problem.title",
      contentKey: "about.ourStory.timeline.problem.content",
    },
    {
      year: "2021",
      locationKey: "about.ourStory.timeline.solution.location",
      titleKey: "about.ourStory.timeline.solution.title",
      contentKey: "about.ourStory.timeline.solution.content",
    },
    {
      year: "2022",
      locationKey: "about.ourStory.timeline.vision.location",
      titleKey: "about.ourStory.timeline.vision.title",
      contentKey: "about.ourStory.timeline.vision.content",
    },
    {
      year: "2023",
      locationKey: "about.ourStory.timeline.mission.location",
      titleKey: "about.ourStory.timeline.mission.title",
      contentKey: "about.ourStory.timeline.mission.content",
    },
  ];

  const renderStoryCard = (item: (typeof storyData)[0], index: number) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className='flex min-h-[250px] flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-xl md:min-h-[280px] md:p-6'
    >
      <div className='mb-4 flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0'>
        <div className='flex items-center space-x-3'>
          <div className='bg-accent-400 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white md:h-12 md:w-12'>
            {item.year}
          </div>
          <div className='min-w-0 flex-1'>
            <Text className='text-base font-semibold text-gray-900 md:text-lg'>
              {t(item.titleKey)}
            </Text>
            <Text className='text-sm text-gray-500'>{t(item.locationKey)}</Text>
          </div>
        </div>
      </div>

      <Text className='flex-grow leading-relaxed text-gray-700'>{t(item.contentKey)}</Text>

      <div className='mt-4 border-t border-gray-100 pt-4'>
        <div className='flex items-center space-x-2'>
          <div className='bg-accent-400 h-2 w-2 rounded-full' />
          <Text className='text-xs text-gray-500'>Story Chapter {index + 1}</Text>
        </div>
      </div>
    </motion.div>
  );

  return (
    <Section className='bg-black py-20 text-white'>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-16 text-center'
        >
          <Text
            as='h2'
            variant='heading'
            className='mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl'
          >
            {t("about.ourStory.title")}
          </Text>
          <Text variant='title' className='mx-auto max-w-4xl text-xl text-gray-300 md:text-2xl'>
            {t("about.ourStory.subtitle")}
          </Text>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className='via-accent-400 mx-auto mt-6 h-1 bg-gradient-to-r from-transparent to-transparent'
          />
        </motion.div>

        {/* OmniStore Technology Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='via-accent-800 from-accent-600 to-accent-600 mx-auto mb-16 max-w-5xl rounded-3xl bg-gradient-to-br p-8 md:p-12'
        >
          <div className='text-center'>
            <Text variant='title' className='mb-4 text-2xl font-bold text-white md:text-3xl'>
              {t("about.ourStory.omnistore.title")}
            </Text>
            <Text className='text-accent-100 mx-auto max-w-4xl text-lg leading-relaxed'>
              {t("about.ourStory.omnistore.description")}
            </Text>
          </div>
        </motion.div>

        {/* Story Timeline */}
        <div className='relative mx-auto max-w-4xl'>
          <StackScrollCards
            items={storyData}
            renderCard={renderStoryCard}
            gap={16}
            topOffset={80}
          />
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='mt-24 text-center'
        >
          <div className='mx-auto max-w-3xl'>
            <Text className='text-xl leading-relaxed text-gray-300 italic'>
              &ldquo;{t("about.ourStory.quote.text")}&rdquo;
            </Text>
            <div className='mt-4 flex items-center justify-center space-x-2'>
              <div className='bg-accent-400 h-px w-8' />
              <Text className='text-sm text-gray-400'>{t("about.ourStory.quote.author")}</Text>
              <div className='bg-accent-400 h-px w-8' />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { OurStorySection };
