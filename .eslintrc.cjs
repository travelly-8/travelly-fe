module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'react', 'prettier'],
  rules: {
    'no-var': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    eqeqeq: 'warn',
    'no-unused-vars': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/no-unused-state': 'warn',
    'react/jsx-key': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-dom/**',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '**/*.tsx',
            group: 'unknown',
            position: 'after',
          },
          {
            pattern: '**/*.ts',
            group: 'unknown',
            position: 'after',
          },
          {
            pattern: '**/*.styled.tsx',
            group: 'unknown',
            position: 'after',
          },
          {
            pattern: '**/*.css',
            group: 'unknown',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
