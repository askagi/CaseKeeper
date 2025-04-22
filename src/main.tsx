import { ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { defaultTheme } from "./global/styles/themes.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={defaultTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
