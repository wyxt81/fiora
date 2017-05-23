module.exports = {
    'extends': [
        'esnext',
        'airbnb',
    ],
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
    },
    'plugins': [
        'react',
        'jsx-a11y',
        'import'
    ],
    'globals': [
        'window',
    ],
    'rules': {
        'indent': [2, 4],
        'global-require': 0,
        'new-cap': 0,
        'func-names': 0,
        'consistent-return': 0,
        'max-len': 0,
        'require-yield': 0,

        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'import/no-commonjs': 0,
        'import/no-nodejs-modules': 0,
        'import/no-mutable-exports': 0,
        'import/extensions': [
            2,
            {
                js: 'never',
                jsx: 'never',
            }
        ],

        'no-console': 0,
        'no-plusplus': 0,
        'no-param-reassign': 0,
        'no-restricted-syntax': [2, 'WithStatement'],
        'no-invalid-this': 0,
        'no-underscore-dangle': 0,
        'import/no-dynamic-require': 0,
        'no-return-assign': 0,

        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': 0,
        'react/prefer-stateless-function': 0,
        'react/require-default-props': 0,
        'react/no-danger': 0,
        'react/no-array-index-key': 0,
        'react/no-multi-comp': 0,
        'react/forbid-prop-types': 0,
        'jsx-a11y/img-has-alt': 0,
        'jsx-a11y/no-static-element-interactions': 0,
    }
};