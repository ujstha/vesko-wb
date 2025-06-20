import gsap from "gsap";
import { useRef, useEffect } from "react";

import { Button } from "./button";
import { Text } from "./text";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Initial animation
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out",
      });

      // Hover animation
      const handleHover = () => {
        gsap.to(cardRef.current, {
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(contentRef.current, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        gsap.to(cardRef.current, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(contentRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      cardRef.current?.addEventListener("mouseenter", handleHover);
      cardRef.current?.addEventListener("mouseleave", handleLeave);

      return () => {
        cardRef.current?.removeEventListener("mouseenter", handleHover);
        cardRef.current?.removeEventListener("mouseleave", handleLeave);
      };
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-white p-8 backdrop-blur-sm transition-all duration-300 ${className}`}
      role='article'
      aria-labelledby={`feature-title-${index}`}
    >
      <div className='flex h-full flex-col items-start justify-between gap-6'>
        <div className='space-y-4'>
          {icon && <i className={`${icon} text-accent-600 text-5xl`} />}
          <Text as='h3' variant='subheading' id={`feature-title-${index}`}>
            {title}
          </Text>
          <Text className='text-lg' color='secondary'>
            {description}
          </Text>
        </div>
        {buttonText && buttonLink && (
          <Button aria-label={`Learn more about ${title}`}>{buttonText}</Button>
        )}
      </div>
    </div>
  );
};
