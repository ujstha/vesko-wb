import { useState } from "react";

import { Button } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";
import { useGSAP, fadeInUp } from "@/shared/hooks/useGSAP";

const CTASection = () => {
  const sectionRef = useGSAP<HTMLDivElement>();

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Replace with your Mailchimp endpoint
    fetch("https://your-mailchimp-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitStatus("success");
          setEmail("");
        } else {
          setSubmitStatus("error");
        }
      })
      .catch(() => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Section
      ref={sectionRef}
      className='to-accent-800 relative min-h-[50vh] bg-gradient-to-b from-black'
      aria-labelledby='cta-heading'
    >
      <Container>
        <div className='mx-auto max-w-3xl text-center'>
          <Text as='h2' variant='heading' className='mb-16 text-white' id='cta-heading'>
            Step into the future
          </Text>

          <div className='space-y-8'>
            <div
              className='rounded-xl bg-white/10 px-8 py-12 backdrop-blur-lg'
              data-gsap={JSON.stringify(fadeInUp)}
            >
              <div className='mb-6 flex items-center justify-center gap-3'>
                <i className={`${RemixIcons.email} text-accent-500 text-2xl`} />
                <Text className='text-white lg:!text-xl'>Join our users waitlist</Text>
              </div>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 sm:flex-row sm:items-start'
              >
                <div className='flex-1'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className='focus:ring-accent-500 w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-gray-400 outline-1 outline-gray-400 focus:ring-2 focus:outline-none'
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
                  disabled={isSubmitting}
                  className='bg-accent-500 hover:bg-accent-600 rounded-lg px-6 py-3 font-semibold whitespace-nowrap text-white shadow-lg transition-all duration-200 hover:shadow-xl sm:flex-shrink-0'
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            </div>

            <div
              className='rounded-xl bg-white/10 px-8 py-12 backdrop-blur-lg'
              data-gsap={JSON.stringify(fadeInUp)}
            >
              <div className='mb-6 flex items-center justify-center gap-3'>
                <i className={`${RemixIcons.userCommunity} text-accent-500 text-2xl`} />
                <Text className='text-white lg:!text-xl'>
                  Merchant? Register and get early bird package offer
                </Text>
              </div>
              <Button
                aria-label='Register as a merchant'
                className='bg-accent-500 hover:bg-accent-600 rounded-lg px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl'
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
