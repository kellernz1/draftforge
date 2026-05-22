import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: "./",
  plugins:
    command === "build"
      ? [
          react(),
          {
            name: "draftforge-classic-script",
            transformIndexHtml(html: string) {
              return html.replace('<script type="module" crossorigin', "<script defer");
            },
          },
        ]
      : [],
  esbuild: {
    jsx: "automatic",
  },
  build: {
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "iife",
        inlineDynamicImports: true,
        name: "DraftForge",
      },
    },
  },
}));
