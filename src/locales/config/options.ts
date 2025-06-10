export const DEFAULT_LANGUAGE = "en";

export const i18nOptions = {
  fallbackLng: DEFAULT_LANGUAGE,
  load: "currentOnly",
  debug: process.env.NODE_ENV === "development",
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
  returnEmptyString: false,
  react: {
    useSuspense: true,
  },
} as const;
