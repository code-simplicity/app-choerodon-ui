module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        commonjs: true, // cmd环境
    },
    extends: ['prettier', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        allowImportExportEverywhere: true, // 不限制eslint对import使用位置
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-param-reassign': ['off', { props: false }], // 函数形参可修改
        'no-use-before-define': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-nested-ternary': 'off',
        'lines-between-class-members': 'off',
        'no-unused-vars': ['off', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        'prettier/prettier': [
            'off',
            {
                singleQuote: true,
                // parser: 'flow',
                endOfLine: 'auto',
            },
        ],
    },
};
