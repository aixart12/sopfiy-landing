import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "preload-built-css",
      transformIndexHtml(html) {
        const link = html.match(/<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/);
        if (!link) return html;
        const preload = `    <link rel="preload" as="style" href="${link[1]}" crossorigin />\n`;
        return html.replace(/<meta name="theme-color"[^>]*>\s*\n/i, (m) => `${m}${preload}`);
      },
    },
  ],
  base: process.env.VITE_BASE ?? "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("react-router")) return "router";
          if (id.includes("react-dom") || id.includes("/react/")) return "react";
        },
      },
    },
  },
});
