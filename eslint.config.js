import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

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
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^\\.\\./",
              message:
                "Для межслойных импортов используйте alias: @app, @pages, @widgets, @entities, @features, @shared или @.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/shared/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^@(app|pages|widgets|entities|features)(/|$)",
              message:
                "Слой shared не должен зависеть от app, pages, widgets, entities и features.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/entities/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^@(app|pages|widgets|features)(/|$)",
              message: "Слой entities не должен зависеть от app, pages, widgets и features.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/features/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^@(app|pages|widgets)(/|$)",
              message: "Слой features не должен зависеть от app, pages и widgets.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/widgets/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^@(app|pages)(/|$)",
              message: "Слой widgets не должен зависеть от app и pages.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/pages/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^@app(/|$)",
              message: "Слой pages не должен зависеть от app.",
            },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
]);
