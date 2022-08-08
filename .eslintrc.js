module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        commonjs: true, // cmd环境
    },
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
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
        'no-param-reassign': ['warn', { props: false }], // 函数形参可修改
        // 'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        // 'prettier/prettier': [
        //     'warn',
        //     {
        //         singleQuote: true,
        //         parser: 'flow',
        //         endOfLine: 'auto',
        //     },
        // ],
    },
};
