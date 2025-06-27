import type { NavigationItem, MenuGroup } from "./navigation.types";

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    id: "home",
    label: "nav.home",
    routeKey: "home",
  },
  {
    id: "merchants",
    label: "nav.merchants",
    routeKey: "merchants",
    items: [
      {
        id: "offline-vendors",
        label: "nav.offline-vendors",
        routeKey: "offlineVendors",
      },
      { id: "online-vendors", label: "nav.online-vendors", routeKey: "onlineVendors" },
    ],
  },
  {
    id: "about",
    label: "nav.about",
    routeKey: "about",
  },
  { id: "people", label: "nav.people", routeKey: "people" },
  {
    id: "contact",
    label: "nav.contact",
    routeKey: "contact",
  },
];

export const USER_MENU: MenuGroup[] = [];
