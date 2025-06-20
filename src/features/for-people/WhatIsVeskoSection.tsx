import React from "react";

import { Section } from "@/shared/components/ui/section";

const items = [
  "It&apos;s a social media app with online stores where you can shop or even sell.",
  "You can follow friends, people, stores, and brands.",
  "A home feed where you'll see posts from people you follow and",
  "Product posts from your favourite stores and brands that you can buy directly.",
  "But Vesko is not just another social commerce app, it is",
];

const WhatIsVeskoSection: React.FC = () => {
  return (
    <Section className='flex w-full flex-col bg-white px-4 py-16 md:flex-row'>
      <div className='mb-8 md:mb-0 md:w-1/3'>
        <h2 className='text-4xl font-bold'>
          What
          <br />
          is Vesko?
        </h2>
      </div>
      <div className='flex flex-col gap-8 md:w-2/3'>
        {items.map((text, idx) => (
          <div key={idx} className='flex items-start gap-6'>
            <span className='w-12 text-3xl font-light'>{`0${idx + 1}`}</span>
            <span className='text-lg'>{text}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export { WhatIsVeskoSection };
