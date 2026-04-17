import { resolve } from "node:path";

import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/app/router/routes",
      generatedRouteTree: "./src/app/router/routeTree.gen.ts",
      enableRouteTreeFormatting: true, // ! значение по умолчанию. Включает функцию форматирования сгенерированного файла дерева маршрутов, что может занять много времени при работе над крупными проектами
    }),
    react(),
    tailwindcss(),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@app": resolve(__dirname, "src/app"),
      "@pages": resolve(__dirname, "src/pages"),
      "@widgets": resolve(__dirname, "src/widgets"),
      "@entities": resolve(__dirname, "src/entities"),
      "@features": resolve(__dirname, "src/features"),
      "@shared": resolve(__dirname, "src/shared"),
    },
  },
});
