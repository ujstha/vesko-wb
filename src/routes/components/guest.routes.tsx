import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { RootRedirect } from "./RootRedirect";

import { SUPPORTED_LANGUAGES } from "@/locales/i18n.config";
import ForPeoplePage from "@/pages/ForPeoplePage";
import { ROUTE_PATHS } from "@/routes/constants/route-paths";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
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
            path: ROUTE_PATHS.contact[lang],
            element: <ContactPage />,
          },
          {
            path: ROUTE_PATHS.people[lang],
            element: <ForPeoplePage />,
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
