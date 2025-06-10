import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { Assets } from "@/shared/constants/assets";

const UnboxingVideo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !videoRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Initial animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Parallax effect
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        scale: 1.1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Section
      ref={sectionRef}
      className='relative min-h-screen overflow-hidden bg-black'
      aria-labelledby='unboxing-heading'
    >
      <div className='perspective-1000 absolute inset-0'>
        <video
          ref={videoRef}
          className='h-full w-full object-cover'
          muted
          loop
          playsInline
          aria-label='Product unboxing demonstration'
        >
          <source src={Assets.unboxingVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <Container className='relative z-10 flex min-h-screen items-center justify-center'>
        <div ref={contentRef} className='text-center'>
          <Text
            as='h2'
            variant='heading'
            className='mb-8 text-4xl font-bold text-white md:text-6xl'
            id='unboxing-heading'
          >
            See it yourself!
          </Text>
          <button
            onClick={togglePlay}
            className='group focus:ring-accent-500 flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:ring-2 focus:outline-none'
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <>
                <PauseIcon className='h-6 w-6' />
                <span>Pause</span>
              </>
            ) : (
              <>
                <PlayIcon className='h-6 w-6' />
                <span>Play</span>
              </>
            )}
          </button>
        </div>
      </Container>
    </Section>
  );
};

export { UnboxingVideo };
