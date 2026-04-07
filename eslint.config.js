import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginQuery from "@tanstack/eslint-plugin-query";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from "eslint-plugin-import";

// FSD-порядок слоёв сверху вниз.
// Каждый слой может импортировать только из слоёв ниже себя.
const FSD_LAYERS = ["app", "pages", "widgets", "features", "entities", "shared"];

const noRelativeParentImport = {
  regex: "^(\\.\\./)+(app|pages|widgets|features|entities|shared)(/|$)",
  message:
    "Межслойные импорты через ../ запрещены. Используйте alias: @app, @pages, @widgets, @entities, @features, @shared или @.",
};

const layerBoundaryConfigs = FSD_LAYERS.flatMap((layer, index) => {
  const forbidden = FSD_LAYERS.slice(0, index);
  if (forbidden.length === 0) return [];

  const group = forbidden.join("|");
  const message = `Слой ${layer} не должен зависеть от ${forbidden.join(", ")}.`;

  return [
    {
      files: [`src/${layer}/**/*.{ts,tsx}`],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              noRelativeParentImport,
              { regex: `^@(${group})(/|$)`, message },
              { regex: `^@/(${group})(/|$)`, message },
            ],
          },
        ],
      },
    },
  ];
});

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-restricted-imports": ["error", { patterns: [noRelativeParentImport] }],
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          newlinesBetween: 1,
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"], "type"],
          internalPattern: ["^@", "^@/"],
        },
      ],

      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
      "perfectionist/sort-exports": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
      "unused-imports/no-unused-imports": "warn",
      "no-unused-vars": "off", // отключаем базовое правило ESLint
      "@typescript-eslint/no-unused-vars": "off", // отключаем также для TypeScript
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "import/no-duplicates": "error",
    },
    plugins: {
      perfectionist,
      "unused-imports": unusedImports,
      import: importPlugin,
    },
  },
  ...layerBoundaryConfigs,
  eslintConfigPrettier,
  ...pluginQuery.configs["flat/recommended"],
]);
