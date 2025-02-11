import { FlatCompat } from "@eslint/eslintrc"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  ...compat.extends("plugin:prettier/recommended"),
  ...compat.extends("plugin:import/recommended"),

  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "import/no-anonymous-default-export": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          disallowTypeAnnotations: false,
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "external",
            "builtin",
            "internal",
            "sibling",
            "parent",
            "index",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
            },
            {
              pattern: "@",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["internal"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]

export default eslintConfig
