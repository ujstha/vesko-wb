import type { ROUTE_PATHS } from "./constants/route-paths";

export type RouteKey = keyof typeof ROUTE_PATHS;

export type RouteParams = Record<string, string>;
