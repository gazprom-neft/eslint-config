module.exports = {
    extends: [
        'eslint:recommend',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },

    ecmaFeatures: {
        jsx: true
    },

    settings: {
        react: {
            version: 'detect'
        },
    },

    linterOptions: {
        exclude: [
            'node_modules/**/*'
        ]
    },

    rules: {
        // Possible Errors
        'no-console': 'warn',
        'no-debugger': 'error',
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-dupe-args': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-obj-calls': 'error',
        'no-promise-executor-return': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-setter-return': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-useless-backreference': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',

        // Best Practice
        'accessor-pairs': 'error',
        'array-callback-return': 'off',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'error',
        'complexity': [
            'error', {
                'max': 5
            }
        ],
        'consistent-return': 'off',
        'curly': 'error',
        'default-case': 'error',
        'default-case-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error',
        'max-classes-per-file': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-constructor-return': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'off',
        'no-magic-numbers': [
            'error', {
                'detectObjects': false,
                'enforceConst': true,
                'ignore': [1]
            }
        ],
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'off',
        'no-new-func': 'off',
        'no-new-wrappers': 'off',
        'no-nonoctal-decimal-escape': 'off',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-properties': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'no-with': 'error',
        'prefer-named-capture-group': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        'radix': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'error',
        'vars-on-top': 'error',
        'wrap-iife': 'error',
        'yoda': 'error',

        // Strict Mode
        'strict': ['error', 'global'],

        // Variables
        'init-declarations': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'off',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': 'error',

        // Stylistic Issues
        'array-bracket-newline': 'error',
        'array-bracket-spacing': 'off',
        'array-element-newline': 'off',
        'block-spacing': 'error',
        'brace-style': ['error', 'stroustrup'],
        'camelcase': 'off',
        'capitalized-comments': 'off',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', 'never'],
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-this': 'off',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'func-names': 'off',
        'func-style': 'off',
        'function-call-argument-newline': 'error',
        'function-paren-newline': 'error',
        'id-denylist': 'error',
        'id-length': [
            'error', {
                'min': 2,
                'max': 30,
                'properties': 'never'
            }
        ],
        'id-match': 'error',
        'implicit-arrow-linebreak': 'error',
        'indent': ['error', 4],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': 'off',
        'keyword-spacing': [
            'error', {
                'before': true
            }
        ],
        'line-comment-position': [
            'error', {
                'position': 'above'
            }
        ],
        'linebreak-style': 'error',
        'lines-around-comment': [
            'error', {
                'allowBlockStart': true,
                'allowObjectStart': true,
                'allowArrayStart': true,
                'beforeBlockComment': true
            }
        ],
        'lines-between-class-members': ['error', 'always'],
        'max-depth': [
            'error', {
                'max': 4
            }
        ],
        'max-len': ['error', 100],
        'max-lines': ['error', 1],
        'max-lines-per-function': 'off',
        'max-nested-callbacks': [
            'error', {
                'max': 3
            }
        ],
        'max-params': [
            'error', {
                'max': 5
            }
        ],
        'max-statements': ['error', 10],
        'max-statements-per-line': [
            'error',
            {
                'max': 1
            }
        ],
        'multiline-comment-style': ['error', 'starred-block'],
        'multiline-ternary': 'off',
        'new-cap': [
            'error', {
                'newIsCap': true
            }
        ],
        'new-parens': 'off',
        'newline-per-chained-call': 'off',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'error',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': [
            'error', {
                'max': 2,
                'maxEOF': 1
            }
        ],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'error',
        'no-restricted-syntax': 'error',
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': [
            'error', {
                'skipBlankLines': true
            }
        ],
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline': 'off',
        'object-curly-spacing': ['error', 'never'],
        'object-property-newline': 'off',
        'one-var': 'error',
        'one-var-declaration-per-line': 'error',
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': 'off',
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'as-needed'],
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],
        'semi': ['error', 'always'],
        'semi-spacing': 'error',
        'semi-style': ['error', 'last'],
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': ['error', 'always'],
        'switch-colon-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': ["error", "never"],

        // ECMAScript 6
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': 'error',
        'constructor-super': 'error',
        'generator-star-spacing': 'off',
        'no-class-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-new-symbol': 'error',
        'no-restricted-exports': 'error',
        'no-restricted-imports': 'error',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'off',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': 'error',
        'sort-imports': 'off',
        'symbol-description': 'off',
        'template-curly-spacing': 'error',
        'yield-star-spacing': ['error', 'before']
    }
};
