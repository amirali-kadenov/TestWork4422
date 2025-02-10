/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
    "stylelint-config-prettier-scss",
  ],
  rules: {
    "prettier/prettier": true,
    "declaration-no-important": true,
    "length-zero-no-unit": true,
    "declaration-block-no-duplicate-properties": true,
    "no-irregular-whitespace": true,
    "selector-max-id": 0,
    "media-feature-range-notation": null,
    "unit-allowed-list": [
      "s",
      "rem",
      "%",
      "fr",
      "deg",
      "px",
      "vh",
      "vw",
      "svh",
      "dvh",
    ],
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]+$",
      {
        message: "Class name should be camelCase",
      },
    ],
  },
}
