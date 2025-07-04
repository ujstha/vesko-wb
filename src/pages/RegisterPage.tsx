import { HeroSection } from "@/features/register/HeroSection";
import { RegisterFormSection } from "@/features/register/RegisterFormSection";

const RegisterPage = () => {
  return (
    <div className='relative -top-18'>
      <HeroSection />
      <RegisterFormSection />
    </div>
  );
};

export default RegisterPage;
