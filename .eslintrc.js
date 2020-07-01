/* eslint-disable quote-props */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'comma-dangle': ['warn', 'never'],
    'indent': ['warn', 2],
    'no-trailing-spaces': 'warn',
    'no-unused-vars': 'warn',
    'quotes': ['warn', 'single'],
    'quote-props': ['warn', 'as-needed'],
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn'
  }
}