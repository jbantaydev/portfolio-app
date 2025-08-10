/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'react-hooks', 'prettier', 'import', 'unused-imports'],
  rules: {
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'linebreak-style': ['error', 'unix'],
  },
  settings: { react: { version: 'detect' } },
  ignorePatterns: ['dist', 'node_modules'],
};
