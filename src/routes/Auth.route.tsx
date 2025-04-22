import { createRoute, Navigate } from "@tanstack/react-router";
import { Login } from "../pages/Login/Login";
import { AuthTemplate } from "../templates/AuthTemplate/AuthTemplate";
import { AppRoute } from "./App.route";

export const AuthRoute = createRoute({
  getParentRoute: () => AppRoute,
  path: "auth",
  component: AuthTemplate,
});

export const DefaultAuthRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/",
  component: () => Navigate({ to: LoginRoute.to }),
});

export const LoginRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/login",
  component: Login,
});

export const CreateAccountRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/create-account",
  component: () => <h2>Create Account</h2>,
});

AuthRoute.addChildren([DefaultAuthRoute, LoginRoute, CreateAccountRoute]);
