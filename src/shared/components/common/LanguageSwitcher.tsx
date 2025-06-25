import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import type { SupportedLanguages } from "@/locales/i18n.config";
import { ROUTE_PATHS } from "@/routes/constants/route-paths";
import { getLocalizedPath } from "@/routes/helpers/localization";

const languageNames: Record<SupportedLanguages, string> = {
  en: "English",
  fi: "Suomi",
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;
  const [, ...rest] = currentPath.split("/");
  const currentSlug = rest.join("/");

  const handleChangeLanguage = (targetLang: SupportedLanguages) => {
    // Try to match currentSlug with ROUTE_PATHS in current language
    const routeKey = Object.keys(ROUTE_PATHS).find((key) => {
      return (
        ROUTE_PATHS[key as keyof typeof ROUTE_PATHS]?.[i18n.language as SupportedLanguages] ===
        currentSlug
      );
    });

    let newPath = `/${targetLang}`;
    if (routeKey) {
      newPath = getLocalizedPath(routeKey as keyof typeof ROUTE_PATHS, targetLang);
    }

    void i18n.changeLanguage(targetLang);
    void navigate(newPath);
  };

  return (
    <div className='flex gap-2'>
      {(Object.keys(languageNames) as SupportedLanguages[]).map((lng) => (
        <button
          key={lng}
          onClick={() => handleChangeLanguage(lng)}
          className={`rounded px-2 py-1 ${
            lng === i18n.language ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {languageNames[lng]}
        </button>
      ))}
    </div>
  );
};
