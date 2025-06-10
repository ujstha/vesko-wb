import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";

const FeaturesSection = () => {
  return (
    <Section>
      <div className='relative mx-auto -mt-10 mb-18 h-40 max-w-3xl'>
        <Text
          className='absolute top-1/2 z-30 -translate-y-1/2 text-center'
          variant='subheading'
          weight='normal'
        >
          A platform that combines social media with e-commerce offering OmniStore ® that connects
          offline retailers with digitally driven offline customers.
        </Text>
        <div className='absolute -top-2 left-5 size-32 rotate-[30deg] rounded-3xl bg-gray-200' />
        <div className='absolute right-5 bottom-0 size-24 -rotate-[30deg] rounded-3xl bg-gray-200' />
      </div>
    </Section>
  );
};

FeaturesSection.displayName = "FeaturesSection";

export { FeaturesSection };
