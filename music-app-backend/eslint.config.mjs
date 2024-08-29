import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier";
import prettierRecommended from "eslint-config-prettier";


export default [
  prettierRecommended,
  {
    files: ["**/*.js"],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "consistent-return": "off",
    },
    languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];