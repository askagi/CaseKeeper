import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { AppRoute } from "./App.route";

const DefaultLayout = lazy(() =>
  import("../templates/defaultTemplates/DefaultTemplate").then((module) => ({
    default: module.DefaultTemplate,
  }))
);

export const DashboardRoute = createRoute({
  getParentRoute: () => AppRoute,
  path: "dashboard",
  component: DefaultLayout,
});

export const DefaultDashboardRoute = createRoute({
  getParentRoute: () => DashboardRoute,
  path: "/",
  component: Dashboard,
});

DashboardRoute.addChildren([DefaultDashboardRoute]);
