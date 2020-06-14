module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "comma-dangle": ["warn", "never"],
    "no-unused-vars": "warn",
    "quotes": ["warn", "single"],
    "quote-props": ["warn", "as-needed"],
    "vue/no-unused-vars": "warn"
  }
}