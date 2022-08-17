module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-explicit-any': 'off',
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: 'if' },
        { blankLine: 'always', prev: '*', next: 'return' },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: [
            'for',
            'try',
            'while',
            'expression',
            'block',
            'block-like',
            'function',
            'switch',
          ],
        },
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
      ],
      "@typescript-eslint/ban-ts-comment": "off"
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
  };