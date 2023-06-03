module.exports = {
  parserOptions: { sourceType: "module" },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "foxkit",
    "foxkit/preact",
    "foxkit/ts-strict",
    "plugin:astro/recommended",
    "prettier"
  ],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".jsx", ".tsx", ".astro"] }
    ]
  },
  ignorePatterns: ["node_modules", "dist"],
  overrides: [
    {
      files: ["**/*.ts?(x)", "**/*.astro"],
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname
      }
    }
  ]
};
