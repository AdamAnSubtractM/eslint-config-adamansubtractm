module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['html', 'prettier', 'react-hooks', 'react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.grahpql',
      '.md',
      '.mdx',
      '.html',
    ],
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.graphql',
          '.md',
          '.mdx',
          '.html',
        ],
      },
    },
  },
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    // doesnt report React use before defined errors
    '@typescript-eslint/no-use-before-define': ['error'],
    // this disables the base rule for no unused vars and then tells the config below to use the TS version as it can report incorrect errors
    'no-unused-vars': 'off',
    // allows us to use the TS version on no unused a variables
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    // allow jsx to be used is jsx, tsx and mdx files
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.tsx', '.jsx', '.mdx'] },
    ],
    // allow files to be imported without the extension being included
    'import/extensions': ['error', 'never'],
    // checks for circal dependencies to a depth of 1
    'import/no-cycle': [2, { maxDepth: 1 }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
          'jest.config.js',
          '*.config.*',
          '**/*.config.*',
        ],
      },
    ],
    // allows you to add a anchor that isn't a valid link
    'jsx-a11y/href-no-hash': 'off',
    // will warn you when your anchor tag isnt a valid href
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    // will make sure you don't break any rules of React hooks
    'react-hooks/rules-of-hooks': 'error',
    // checks you useEffect dependencies
    'react-hooks/exhaustive-deps': 'warn',
    // warns if a debugger is left in the code
    'no-debugger': 'warn',
    // warns if you use an alert
    'no-alert': 'warn',
    // allows you to await within a loop. There are some valid scenarios for this
    'no-await-in-loop': 'off',
    // doesnt allow you to assign variables in a return statement unless in parentheses
    'no-return-assign': ['error', 'except-parens'],
    // errors if the following statements are used
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // ensures variables should be const if they're never reassigned
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    // ensures curly braces are used when they're need
    'arrow-body-style': ['error', 'as-needed'],
    // ensure no expressions defined are unused and allows template literals to be used
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
      },
    ],
    // ensure you dont directly manipulate an argument, you must reassign it first. Allows you to mutate props of args
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],

    // warn if console logs are left in
    'no-console': 'warn',
    // allows a named export even when its the only export in a file
    'import/prefer-default-export': 'off',
    // allows you to assign anonymous functions to named variables
    'func-names': 'off',
    // ensures you dont have a space before func parens
    'space-before-function-paren': 'off',
    // allows dangling commas
    'comma-dangle': 'off',
    // doesn't enforce a max line length
    'max-len': 'off',
    // alows underscore dangle. example; const _foo = `bar`;
    'no-underscore-dangle': 'off',
    // allows you to have returns that don't return a value
    'consistent-return': 'off',
    // warns you when you forget to name your React component
    'react/display-name': 'warn',
    // allows you to use an index number in key. This should generally be avoided for rerendering purposed but sometimes is necessary
    'react/no-array-index-key': 'off',
    // allows you to use JSX w/o React being defined
    'react/react-in-jsx-scope': 'off',
    // warns you to write stateless functional components when state isn't used
    'react/prefer-stateless-function': 'warn',
    // allows you to have generic prop types. Probably arent using these if you're using TS
    'react/forbid-prop-types': 'off',
    // this is intended to prevent you from typing certain entities by mmistake but incorrectly reports issues so we'll turn it off
    'react/no-unescaped-entities': 'off',
    // allows you to do prop spreading
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    /**
     * Disabled forcing button to have type. To be clear, a button SHOULD have a type.
     * There is a bug where this rule does not pick up types from Typescript or default props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/issues/1555
     * */
    'react/button-has-type': 'off',
    // ensures you either have an htmlFor on a label or you wrap it in a control
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    // allows you to not require default props when props types arent required. Probably not using this with TS
    'react/require-default-props': 'off',
    // allows you to omit the second argument to parseInt a.k.a the radix
    radix: 'off',
    // doesn't allow shadow variables to be declared
    'no-shadow': [
      'error',
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'dot-notation': ['error', { allowKeywords: true }],
    // enforces single quotes
    quotes: [
      `error`,
      'single',
      {
        // allows the use of non single quotes if it would have otherwise been escaped
        avoidEscape: true,
        // allows backticks for template litterals
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        // below line only for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    // eslint recommends you turn off 'no-undef' for TS projects as it complains about global type references
    // link: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
