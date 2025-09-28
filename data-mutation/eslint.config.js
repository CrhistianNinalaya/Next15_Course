export default [
  {
    ignores: [],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {},
    },
    env: {
      browser: true,
      node: true,
    },
    plugins: {},
    rules: {
      '@next/next/no-img-element': 'off',
      'no-undef': 'error',
    },
  },
];
