module.exports = {
  parserOptions: { sourceType: "module" },
  extends: [
    "eslint:recommended",
    "foxkit",
    "foxkit/preact",
    "foxkit/ts",
    "plugin:astro/recommended",
    "prettier"
  ],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".jsx", ".tsx", ".astro"] }
    ]
  }
};
