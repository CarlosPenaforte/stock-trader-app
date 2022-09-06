module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: false,
        trailingComma: "es5",
        tabWidth: 2,
        useTabs: false,
        endOfLine: "auto",
        vueIndentScriptAndStyle: true,
      },
    ],
  },
};
