import type { RouteKey } from "@/routes/route.types";

export interface NavigationItem {
  id: string;
  label: `nav.${string}`;
  routeKey: RouteKey;
  items?: NavigationItem[];
}

export interface MenuGroup {
  id: string;
  label: string;
  items: NavigationItem[];
}
