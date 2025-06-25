import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const ReviewsCarousel = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Get reviews from translations
  const reviews: Review[] = t("home.reviews.reviews", { returnObjects: true }) as Review[];

  useEffect(() => {
    if (!sectionRef.current || !carouselRef.current) return;

    const ctx = gsap.context(() => {
      // Initial animation
      gsap.from(carouselRef.current?.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const navigate = (direction: "prev" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % reviews.length
        : (currentIndex - 1 + reviews.length) % reviews.length;

    const cards = carouselRef.current?.children;
    if (!cards) return;

    const currentCard = cards[currentIndex] as HTMLElement;
    const nextCard = cards[newIndex] as HTMLElement;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      },
    });

    if (direction === "next") {
      tl.to(currentCard, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }).fromTo(
        nextCard,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.inOut" },
        "-=0.5"
      );
    } else {
      tl.to(currentCard, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }).fromTo(
        nextCard,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.inOut" },
        "-=0.5"
      );
    }
  };

  return (
    <Section
      ref={sectionRef}
      className='from-accent-900 min-h-[75vh] bg-gradient-to-b to-black py-32'
      aria-labelledby='reviews-heading'
    >
      <Container>
        <div className='mb-16 text-center'>
          <Text
            as='h2'
            variant='heading'
            className='mb-4 text-4xl font-bold text-white'
            id='reviews-heading'
          >
            {t("home.reviews.heading")}
          </Text>
          <Text className='text-xl text-gray-300'>{t("home.reviews.subtitle")}</Text>
        </div>

        <div className='relative'>
          <div ref={carouselRef} className='relative flex items-center justify-center'>
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`absolute w-full max-w-2xl rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-all ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={index !== currentIndex}
              >
                <div className='mb-6 flex items-center gap-4'>
                  <img
                    src={review.avatar}
                    alt=''
                    className='h-16 w-16 rounded-full'
                    aria-hidden='true'
                  />
                  <div>
                    <Text className='font-semibold text-white'>{review.name}</Text>
                    <Text className='text-sm text-gray-400'>
                      {review.role} at {review.company}
                    </Text>
                  </div>
                </div>
                <Text className='text-lg text-gray-300'>{review.content}</Text>
              </div>
            ))}
          </div>

          <div className='mt-8 flex justify-center gap-4'>
            <button
              onClick={() => navigate("prev")}
              className='focus:ring-accent-500 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:ring-2 focus:outline-none'
              aria-label={t("common.previous")}
              disabled={isAnimating}
            >
              <ChevronLeftIcon className='h-6 w-6' />
            </button>
            <button
              onClick={() => navigate("next")}
              className='focus:ring-accent-500 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:ring-2 focus:outline-none'
              aria-label={t("common.next")}
              disabled={isAnimating}
            >
              <ChevronRightIcon className='h-6 w-6' />
            </button>
          </div>

          <div className='mt-4 flex justify-center gap-2'>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-accent-500" : "bg-white/30"
                }`}
                aria-label={`${t("common.goToReview")} ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { ReviewsCarousel };
