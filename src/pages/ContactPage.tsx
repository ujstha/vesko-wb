import { ContactFormSection } from "@/features/contact/ContactFormSection";
import { HeroSection } from "@/features/contact/HeroSection";

const ContactPage = () => {
  return (
    <div className='relative -top-18'>
      <HeroSection />
      <ContactFormSection />
    </div>
  );
};

export default ContactPage;
