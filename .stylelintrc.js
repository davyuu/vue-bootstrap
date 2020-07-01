/* eslint-disable quote-props */
module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'function-comma-space-after': 'always',
    'function-url-quotes': 'never',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-vendor-prefix': true,
    'max-empty-lines': 2,
    'no-eol-whitespace': true,
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,
    'property-no-vendor-prefix': true,
    'selector-list-comma-space-before': 'never',
    'selector-list-comma-newline-after': 'always',
    'string-quotes': 'single',
    'value-no-vendor-prefix': true
  }
}
