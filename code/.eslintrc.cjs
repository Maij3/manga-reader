module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "camelcase": "error",
    "spaced-comment": "error",
    "no-duplicate-imports": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow"
      }
    ],
    'react-refresh/only-export-components': 'off'
    /*     'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: false },
        ], */
  },
}
