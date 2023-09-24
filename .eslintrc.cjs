module.exports = {
  parserOptions: { sourceType: "module" },
  extends: [
    "foxkit/strict",
    "foxkit/ts-strict",
    "foxkit/preact",
    "plugin:astro/recommended",
    "prettier"
  ],
  rules: {
    "react/react-in-jsx-scope": "off"
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname
      }
    },
    {
      files: ["**/*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      rules: {
        "react/jsx-filename-extension": "off",
        "react/no-unknown-property": "off",
        "react/no-unescaped-entities": "off"
      }
    }
  ],
  ignorePatterns: ["dist"]
};
