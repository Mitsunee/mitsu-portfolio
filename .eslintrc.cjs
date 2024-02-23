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
      files: ["**/*.ts?(x)", "**/*.astro"],
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
    },
    {
      files: ["**/*.mjs", "**/*.ts?(x)", "**/*.astro"],
      plugins: ["simple-import-sort"],
      extends: ["plugin:import/recommended", "plugin:import/typescript"],
      rules: {
        "sort-imports": "off",
        "simple-import-sort/imports": [
          "warn",
          {
            groups: [
              [
                // Side effect imports.
                "^\\u0000",
                "^\\u0000.+\\.css$",
                // node built-ins
                `^(${require("module").builtinModules.join("|")})(/|$)`,
                // external packages
                "^@?\\w",
                // aliased imports
                "^~",
                // Parent imports. Put `..` last.
                "^\\.\\.\\/",
                // Same-folder imports and `.` last.
                "^\\.\\/",
                // Style imports.
                "^\\..+\\.css$",
                "^\\..+\\.module\\.css$"
              ]
            ]
          }
        ],
        "import/order": "off",
        "import/first": "warn",
        "import/newline-after-import": "warn",
        "import/no-unresolved": "off"
      }
    }
  ],
  ignorePatterns: ["dist"]
};
