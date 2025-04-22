import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { Processes } from "../pages/Processes/Processes";
import { AppRoute } from "./App.route";

const DefaultLayout = lazy(() =>
  import("../templates/defaultTemplates/DefaultTemplate").then((module) => ({
    default: module.DefaultTemplate,
  }))
);

export const ProcessRoute = createRoute({
  getParentRoute: () => AppRoute,
  path: "process",
  component: DefaultLayout,
});

export const DefaultProcessRoute = createRoute({
  getParentRoute: () => ProcessRoute,
  path: "/",
  component: Processes,
});

ProcessRoute.addChildren([DefaultProcessRoute]);
