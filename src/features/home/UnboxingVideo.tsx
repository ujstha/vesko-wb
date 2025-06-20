import { useRef, useState } from "react";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { useGSAP, scaleIn } from "@/shared/hooks/useGSAP";
import gsap from "gsap";

const UnboxingVideo = () => {
  const sectionRef = useGSAP<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Parallax effect for the video
  useGSAP(
    () => {
      if (!videoRef.current || !sectionRef.current) return;
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
    },
    { scope: sectionRef }
  );

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
          <source src='/videos/unboxing.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <Container className='relative z-10 flex min-h-screen items-center justify-center'>
        <div className='text-center' data-gsap={JSON.stringify(scaleIn)}>
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
