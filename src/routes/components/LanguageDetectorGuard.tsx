import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { DEFAULT_LANGUAGE } from "@/locales/config/options";
import i18n, { SUPPORTED_LANGUAGES } from "@/locales/i18n.config";
import { ROUTE_PATHS } from "@/routes/constants/route-paths";

const LanguageDetectorGuard = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    const [langSegment, pathSegment] = segments;

    const isSupportedLang = SUPPORTED_LANGUAGES.includes(
      langSegment as (typeof SUPPORTED_LANGUAGES)[number]
    );

    if (isSupportedLang) {
      // Try to match route key for that language
      const validRouteExists = Object.entries(ROUTE_PATHS).some(([_, value]) => {
        return (
          value[langSegment as keyof typeof value] === pathSegment || pathSegment === undefined
        );
      });

      if (validRouteExists) {
        void i18n.changeLanguage(langSegment);
        return;
      } else {
        // Fall back to same route in default language
        const fallbackPath = Object.entries(ROUTE_PATHS).find(([_, value]) => {
          return Object.values(value).includes(pathSegment as (typeof value)[keyof typeof value]);
        });

        if (fallbackPath) {
          void navigate(`/${DEFAULT_LANGUAGE}/${pathSegment}`, { replace: true });
        } else {
          // Optional: redirect to 404 page
          void navigate(`/${DEFAULT_LANGUAGE}/404`, { replace: true });
        }
      }
    } else {
      void navigate(`/${DEFAULT_LANGUAGE}`, { replace: true });
    }
  }, [pathname, navigate]);

  return <>{children}</>;
};

export { LanguageDetectorGuard };
