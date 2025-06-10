import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { detectionOptions } from "./config/detection";
import { i18nOptions } from "./config/options";
import { resources } from "./resources";

export const SUPPORTED_LANGUAGES = ["en", "fi"] as const;
export type SupportedLanguages = (typeof SUPPORTED_LANGUAGES)[number];

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: SUPPORTED_LANGUAGES,
    detection: detectionOptions,
    ...i18nOptions,
  });

export default i18n;
