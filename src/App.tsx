import { RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { AppRouter } from "./routes/App.route";

export function App() {
  // return <Login />;
  // return <Home />;
  return <RouterProvider router={AppRouter} />;
}
