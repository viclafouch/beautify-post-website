module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  ignorePatterns: ['.eslintrc.js', 'next.config.js'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        jsxSingleQuote: false,
        trailingComma: 'none',
        arrowParens: 'avoid',
        endOfLine: 'auto'
      }
    ]
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [['^react', '^next', '^@mui(/.*|$)', '^', '^[^.]']]
          }
        ]
      }
    }
  ]
}
