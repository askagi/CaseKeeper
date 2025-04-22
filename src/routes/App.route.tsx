import {
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
  // Navigate,
  Outlet,
} from "@tanstack/react-router";
import { AuthRoute } from "./Auth.route";
import { DashboardRoute } from "./Dashboard.route";
import { ProcessRoute } from "./Process.route";

export const AppRoute = createRootRoute({
  component: Outlet,
  notFoundComponent: () => <h1>404</h1>,
});

export const DefaultRoute = createRoute({
  getParentRoute: () => AppRoute,
  path: "/",
  component: () => <Navigate to={AuthRoute.to} />,
  // component: () => <Navigate to={DashboardRoute.to} />,
});

export const AppRouteTree = AppRoute.addChildren([
  DefaultRoute,
  AuthRoute,
  DashboardRoute,
  ProcessRoute,
]);

export const AppRouter = createRouter({
  routeTree: AppRouteTree,
  defaultPreload: "intent",
  // defaultStaleTime: 5000,
  // scrollRestoration: true
});
