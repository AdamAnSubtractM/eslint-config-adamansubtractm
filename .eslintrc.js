module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx'],
      },
    },
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'func-names': [2, 'as-needed'],
    'arrow-body-style': [2, 'as-needed'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'no-debugger': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],

    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 'off', // prevents eslint from yelling about React import in jsx/tsx files
    '@typescript-eslint/no-use-before-define': ['error'], // prevents eslint from yelling about React import in jsx/tsx files
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'consistent-return': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      aspects: ['invalidHref', 'preferButton'],
    }],
  },
};
