const CracoLessPlugin = require('craco-less');

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
            },
        },
    ],
};
