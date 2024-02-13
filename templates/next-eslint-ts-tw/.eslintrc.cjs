module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ["react", 'react-refresh', "prettier", "import"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/order": ["warn", {
      "groups": ["type", "builtin", "object", "external", "internal", "parent", "sibling", "index"],
      "pathGroups": [{
        "pattern": "~/**",
        "group": "external",
        "position": "after"
      }],
      "newlines-between": "always"
    }]
  },
}
