import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
  ],

  server: { open: true },
});
