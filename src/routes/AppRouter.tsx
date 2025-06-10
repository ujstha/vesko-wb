import { Suspense } from "react";
import { useRoutes, type RouteObject } from "react-router-dom";

import { GuestRoutes } from "@/routes/components/guest.routes";
import { LoadingSpinner } from "@/shared/components/ui/loading-spinner";

export const AppRouter = () => {
  const element = useRoutes(
    GuestRoutes().map((route) => ({
      ...route,
      element: route.element ? (
        <Suspense fallback={<LoadingSpinner />}>{route.element}</Suspense>
      ) : undefined,
      children: route.children?.map((child) => ({
        ...child,
        element: child.element ? (
          <Suspense fallback={<LoadingSpinner />}>{child.element}</Suspense>
        ) : undefined,
      })),
    })) as RouteObject[]
  );

  return element;
};
