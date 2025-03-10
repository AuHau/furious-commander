module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  env: {
    jest: true,
  },
  globals: {
    browser: true,
    page: true,
  },
  plugins: ['jest'],
  rules: {
    'array-bracket-newline': ['error', { multiline: true }],
    strict: ['error', 'safe'],
    curly: 'error',
    'block-scoped-var': 'error',
    complexity: 'warn',
    'default-case': 'error',
    'dot-notation': 'warn',
    eqeqeq: 'error',
    'guard-for-in': 'warn',
    'linebreak-style': ['warn', 'unix'],
    'no-alert': 'error',
    'no-case-declarations': 'error',
    'no-constant-condition': 'error',
    'no-div-regex': 'error',
    'no-empty': 'warn',
    'no-empty-pattern': 'error',
    'no-implicit-coercion': 'error',
    'prefer-arrow-callback': 'warn',
    'no-labels': 'error',
    'no-loop-func': 'error',
    'no-nested-ternary': 'warn',
    'no-script-url': 'error',
    'no-warning-comments': 'warn',
    'quote-props': ['error', 'as-needed'],
    'require-yield': 'error',
    'max-nested-callbacks': ['error', 4],
    'max-depth': ['error', 4],
    'require-await': 'error',
    'space-before-function-paren': [
      'error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'no-useless-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-unused-expressions': 'off',
    curly: ['error', 'multi-line'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error', {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        // '@typescript-eslint/ban-ts-ignore': 'off',
        'max-nested-callbacks': ['error', 10], // allow describe/it nesting
      },
    },
  ],
}
