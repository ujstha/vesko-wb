import { Logo } from "@/shared/components/common/Logo";
import { Container } from "@/shared/components/ui/container";

const Footer: React.FC = () => {
  return (
    <footer className='bg-gradient-to-b from-[#F5FAF7] to-[#CDE6D9] text-sm text-gray-700'>
      <Container className='px-4 py-10'>
        <div className='mb-6 md:mb-0'>
          <Logo className='h-20 md:h-24' />
        </div>

        <div className='mt-6 flex items-center justify-between text-right'>
          <p className='mt-2 text-sm'>&copy; 2024 Vesko. All rights reserved.</p>
          <a href='#' className='text-sm text-green-800 hover:underline'>
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
