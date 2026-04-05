import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set VITE_BASE when deploying to GitHub Pages project sites, e.g. /repo-name/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? "/",
});
