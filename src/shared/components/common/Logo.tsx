import { Assets } from "@/shared/constants/assets";
import { cn } from "@/shared/utils/cn";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  href?: string;
  logoLight?: boolean;
}

const Logo: React.FC<LogoProps> = ({ href = "/", logoLight = false, className, ...props }) => {
  return (
    <a href={href} className='flex items-center gap-2'>
      <img
        src={logoLight ? Assets.logoLight : Assets.logo}
        alt='Vesko Logo'
        className={cn("h-7", className)}
        {...props}
      />
    </a>
  );
};

Logo.displayName = "Logo";

export { Logo };
