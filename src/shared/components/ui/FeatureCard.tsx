import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Container } from "./container";
import { Text } from "./text";
import { Button } from "./button";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
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

      cardRef.current.addEventListener("mouseenter", handleHover);
      cardRef.current.addEventListener("mouseleave", handleLeave);

      return () => {
        cardRef.current?.removeEventListener("mouseenter", handleHover);
        cardRef.current?.removeEventListener("mouseleave", handleLeave);
      };
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 ${className}`}
      role='article'
      aria-labelledby={`feature-title-${index}`}
    >
      <div ref={contentRef} className='flex h-full flex-col items-start justify-between gap-6'>
        <div className='space-y-4'>
          <div className='mb-4'>{icon}</div>
          <Text
            as='h3'
            variant='heading'
            className='text-2xl font-semibold text-white'
            id={`feature-title-${index}`}
          >
            {title}
          </Text>
          <Text className='text-lg text-gray-300'>{description}</Text>
        </div>
        {buttonText && buttonLink && (
          <Button
            variant='secondary'
            href={buttonLink}
            className='group-hover:bg-accent-600'
            aria-label={`Learn more about ${title}`}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};
