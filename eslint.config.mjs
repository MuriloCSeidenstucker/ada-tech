import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    env: {
      browser: true,  // Reconhece variáveis globais do navegador
      node: true,     // Reconhece variáveis globais do Node.js
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
