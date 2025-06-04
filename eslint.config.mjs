import globals from "globals";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import react from "eslint-plugin-react";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default [
  ...pluginQuery.configs["flat/recommended"],
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{jsx,ts,tsx}"],
    plugins: {
      react,
      "@stylistic": stylistic,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "@stylistic/quotes": ["warn", "double"],
      "@stylistic/array-bracket-newline": ["warn", { minItems: 1 }],
      "@stylistic/array-element-newline": ["warn", "always"],
      "@stylistic/arrow-parens": ["warn", "always"],
      "@stylistic/comma-spacing": ["warn", { before: false, after: true }],
      "@stylistic/dot-location": ["warn", "object"],
      "@stylistic/line-comment-position": ["warn", "above"],
      "@stylistic/spaced-comment": ["warn", "always"],
      "@stylistic/no-mixed-operators": ["warn", { allowSamePrecedence: false }],
      "@stylistic/function-call-argument-newline": ["warn", "always"],
      "@stylistic/function-paren-newline": ["warn", { minItems: 2 }],
      "prefer-const": "off",
      "no-async-promise-executor": ["error"],
      "no-await-in-loop": ["error"],
      "no-fallthrough": ["warn"],
      "no-promise-executor-return": ["error", { allowVoid: true }],
      "no-obj-calls": ["error"],
      "no-unreachable-loop": ["warn"],
      "no-invalid-regexp": ["error"],
      "react/react-in-jsx-scope": "off",
    },
  },
];
