import { useEffect } from "react";

import i18n from "@/locales/i18n.config";

export const useSetHtmlLang = () => {
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, []);
};
