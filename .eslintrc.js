module.exports = {
  extends: ['@viclafouch/eslint-config-viclafouch/typescript'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: ['.eslintrc.js']
}
