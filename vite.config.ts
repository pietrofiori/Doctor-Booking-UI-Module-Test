/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      },
      {
        find: "@layout",
        replacement: path.resolve(__dirname, "src/layout")
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components")
      },
      {
        find: "@types",
        replacement: path.resolve(__dirname, "src/types")
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets")
      },
      {
        find: "@routes",
        replacement: path.resolve(__dirname, "src/routes")
      },
      {
        find: "@screens",
        replacement: path.resolve(__dirname, "src/screens")
      },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "src/constants")
      },
      {
        find: "@theme",
        replacement: path.resolve(__dirname, "src/theme")
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils")
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "src/hooks")
      },
      {
        find: "@store",
        replacement: path.resolve(__dirname, "src/store")
      }
    ]
  }
});
