import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import type { SupportedLanguages } from "@/locales/i18n.config";
import { getLocalizedPath } from "@/routes/helpers/localization";
import type { RouteKey } from "@/routes/route.types";
import { cn } from "@/shared/utils/cn";

const linkVariants = cva(
  "underline-offset-0 hover:underline hover:underline-offset-2 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "text-accent-500 hover:text-accent-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface LinkProps extends VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  routeKey: RouteKey;
  className?: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, routeKey, variant = "default", children }, ref) => {
    const { i18n } = useTranslation();
    const localizedPath = getLocalizedPath(routeKey, i18n.language as SupportedLanguages);

    return (
      <NavLink
        ref={ref}
        className={({ isActive }) =>
          cn(
            linkVariants({
              variant: isActive ? "default" : variant,
            }),
            className
          )
        }
        to={localizedPath}
      >
        {children}
      </NavLink>
    );
  }
);

Link.displayName = "Link";

export { Link };
