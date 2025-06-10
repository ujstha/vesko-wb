import type { SupportedLanguages } from "@/locales/i18n.config";
import { ROUTE_PATHS } from "@/routes/constants/route-paths";
import type { RouteKey, RouteParams } from "@/routes/route.types";

export const getLocalizedPath = (
  key: RouteKey,
  language: SupportedLanguages,
  params?: RouteParams
): string => {
  let path = `/${language}/${ROUTE_PATHS[key][language]}`;

  if (params) {
    Object.entries(params).forEach(([paramKey, value]) => {
      path = path.replace(`:${paramKey}`, value);
    });
  }
  return path;
};
