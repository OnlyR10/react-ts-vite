import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
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
      extensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".cjs", ".json"],
      tsconfigPaths: true,
    },
    server: {
      port: 3000,
      strictPort: true,
      open: true,
      proxy: {},
    },
    preview: {
      port: 2001,
      strictPort: true,
      open: true,
    },
  };
});
