import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Button } from "@/shared/components/ui/button";
import { EnvelopeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const userCTARef = useRef<HTMLDivElement>(null);
  const vendorCTARef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (!sectionRef.current || !userCTARef.current || !vendorCTARef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(userCTARef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        vendorCTARef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your Mailchimp endpoint
      const response = await fetch("https://your-mailchimp-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      ref={sectionRef}
      className='to-accent-900 min-h-[50vh] bg-gradient-to-b from-black py-32'
      aria-labelledby='cta-heading'
    >
      <Container>
        <div className='mx-auto max-w-3xl text-center'>
          <Text
            as='h2'
            variant='heading'
            className='mb-16 text-4xl font-bold text-white'
            id='cta-heading'
          >
            Step into the future
          </Text>

          <div className='space-y-8'>
            <div ref={userCTARef} className='rounded-xl bg-white/5 p-8 backdrop-blur-sm'>
              <div className='mb-6 flex items-center justify-center gap-3'>
                <EnvelopeIcon className='text-accent-500 h-6 w-6' />
                <Text className='text-xl text-white'>Join our users waitlist</Text>
              </div>
              <form onSubmit={handleSubmit} className='flex flex-col gap-4 sm:flex-row'>
                <div className='flex-1'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className='focus:ring-accent-500 w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:outline-none'
                    required
                    aria-label='Email address'
                    aria-invalid={submitStatus === "error"}
                    aria-describedby={submitStatus === "error" ? "email-error" : undefined}
                  />
                  {submitStatus === "error" && (
                    <p id='email-error' className='mt-2 text-sm text-red-500'>
                      Please enter a valid email address
                    </p>
                  )}
                  {submitStatus === "success" && (
                    <p className='mt-2 text-sm text-green-500'>
                      Thank you for joining our waitlist!
                    </p>
                  )}
                </div>
                <Button
                  type='submit'
                  variant='primary'
                  disabled={isSubmitting}
                  className='whitespace-nowrap'
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            </div>

            <div ref={vendorCTARef} className='rounded-xl bg-white/5 p-8 backdrop-blur-sm'>
              <div className='mb-6 flex items-center justify-center gap-3'>
                <UserGroupIcon className='text-accent-500 h-6 w-6' />
                <Text className='text-xl text-white'>
                  Merchant? Register and get early bird package offer
                </Text>
              </div>
              <Button
                variant='secondary'
                href='https://your-typeform-link'
                className='w-full'
                aria-label='Register as a merchant'
              >
                Register as Merchant
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { CTASection };
