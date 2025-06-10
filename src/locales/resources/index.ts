import enResources from "./translations/en.json";
import fiResources from "./translations/fi.json";

export const resources = {
  en: { translation: enResources },
  fi: { translation: fiResources },
} as const;
