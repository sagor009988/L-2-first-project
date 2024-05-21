import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser },

    rules: {
     
      "no-unused-vars": "error",
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
  },
  ignores: ["**/node_modules/", ".dist/"]
},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];