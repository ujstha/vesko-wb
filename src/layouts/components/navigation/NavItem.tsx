import { cva, type VariantProps } from "class-variance-authority";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import type { NavigationItem } from "@/layouts/navigation.types";
import type { SupportedLanguages } from "@/locales/i18n.config";
import { getLocalizedPath } from "@/routes/helpers/localization";
import { RemixIcons } from "@/shared/constants/icons";
import { cn } from "@/shared/utils/cn";

const navItemVariants = cva(
  "group relative inline-flex items-center justify-center rounded-sm transition-smooth focus:outline-2 focus:outline-black overflow-hidden",
  {
    variants: {
      variant: {
        default: "text-xl gap-1.5 px-3 py-1.5",
        desktop: "text-sm gap-1 px-2 py-1",
      },
      state: {
        active:
          "font-medium md:text-accent-600 underline decoration-2 decoration-accent-600 underline-offset-4",
        default: "font-medium md:font-normal",
      },
      isCTA: {
        true: "border border-neutral-200 rounded-full px-3 py-2 gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "default",
    },
  }
);

interface NavItemProps extends NavigationItem, VariantProps<typeof navItemVariants> {
  isCTA?: boolean;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  isCTA = false,
  variant,
  label,
  className,
  routeKey,
  onClick,
}) => {
  const { t, i18n } = useTranslation();
  const localizedPath = getLocalizedPath(routeKey, i18n.language as SupportedLanguages);

  return (
    <NavLink
      to={onClick ? "#" : localizedPath}
      end
      className={({ isActive }) =>
        cn(
          navItemVariants({ variant, state: isActive && !onClick ? "active" : "default", isCTA }),
          className
        )
      }
      onClick={onClick && onClick}
    >
      <span className='relative inline-flex flex-col overflow-hidden'>
        <span className='transition-smooth transform group-hover:-translate-y-full'>
          {t(label)}
        </span>
        <span className='transition-smooth absolute top-full transform group-hover:-translate-y-full'>
          {t(label)}
        </span>
      </span>
      {children}
      {isCTA && (
        <span className='group bg-accent-600 relative inline-flex size-6 items-center justify-center overflow-hidden rounded-full'>
          <span className='absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-0'>
            <i className={`text-default-white ${RemixIcons.arrowRightUp}`} />
          </span>
          <span className='absolute inset-0 flex translate-x-[-0.5rem] translate-y-[0.5rem] items-center justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100'>
            <i className={`text-default-white ${RemixIcons.arrowRightUp}`} />
          </span>
        </span>
      )}
    </NavLink>
  );
};

export { NavItem };
