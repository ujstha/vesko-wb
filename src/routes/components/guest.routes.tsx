import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { RootRedirect } from "./RootRedirect";

import { SUPPORTED_LANGUAGES } from "@/locales/i18n.config";
import { ROUTE_PATHS } from "@/routes/constants/route-paths";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ForPeoplePage = lazy(() => import("@/pages/ForPeoplePage"));
const ForOfflineVendorPage = lazy(() => import("@/pages/ForOfflineVendorPage"));
const ForOnlineVendorPage = lazy(() => import("@/pages/ForOnlineVendorPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export const GuestRoutes = (): RouteObject[] => {
  const localizedRoutes = SUPPORTED_LANGUAGES.flatMap((lang) => {
    return [
      {
        path: `/${lang}`,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: ROUTE_PATHS.about[lang],
            element: <AboutPage />,
          },
          {
            path: ROUTE_PATHS.offlineVendors[lang],
            element: <ForOfflineVendorPage />,
          },
          {
            path: ROUTE_PATHS.onlineVendors[lang],
            element: <ForOnlineVendorPage />,
          },
          {
            path: ROUTE_PATHS.contact[lang],
            element: <ContactPage />,
          },
          {
            path: ROUTE_PATHS.people[lang],
            element: <ForPeoplePage />,
          },
          {
            path: ROUTE_PATHS.register[lang],
            element: <RegisterPage />,
          },
          {
            path: "*",
            element: <NotFoundPage />,
          },
        ],
      },
    ];
  });

  return [{ path: "/", element: <RootRedirect /> }, ...localizedRoutes];
};
