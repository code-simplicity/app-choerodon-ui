const CracoLessPlugin = require('craco-less');
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
const path = require('path');

// 解析目录
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    babel: {
        plugins: [
            [
                'import',
                {
                    libraryName: 'choerodon-ui',
                    style: true,
                },
                'c7n',
            ],
            [
                'import',
                {
                    libraryName: 'choerodon-ui/pro',
                    style: true,
                },
                'c7n-pro',
            ],
            [
                '@babel/plugin-proposal-decorators',
                {
                    legacy: true,
                },
            ],
        ],
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                        modifyVars: {
                            '@c7n-icon-url': '~choerodon-ui-font/fonts/icomoon',
                        },
                    },
                },
                cssLoaderOptions: {
                    url: true,
                },
                resources: ['./src/styles'],
            },
        },
        {
            plugin: reactHotReloadPlugin,
        },
    ],
    // 配置Webpack的别名路径
    webpack: {
        alias: {
            '@src': resolve('src'),
            '@components': resolve('src/components'),
            'react-dom': '@hot-loader/react-dom',
        },
    },
    // 自定义启动服务端口
    devServer: {
        port: 8888,
    },
};
