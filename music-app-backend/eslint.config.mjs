import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier";
import prettierRecommended from "eslint-config-prettier";
import pluginSecurity from "eslint-plugin-security";


export default [
  prettierRecommended,
  pluginSecurity.configs.recommended,
  {
    files: ["**/*.js"],
    plugins: {
      prettier: pluginPrettier,
    security: pluginSecurity,
    },
    rules: {
      "no-console": "error",
      "consistent-return": "off",
      "security/detect-object-injection": "off",
    },
    languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];