const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const APP_PORT = 3003;

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${APP_PORT}`,
        'webpack/hot/only-dev-server',
        './src/index.tsx',
    ],
    devServer: {
        https: false,
        port: APP_PORT,
        open: false,
        historyApiFallback: true,
        devMiddleware: {
            // https://webpack.js.org/configuration/experiments/#experimentslazycompilation
            // lazy: false,
            stats: 'minimal',
        },
        client: {
            logging: 'info',
            overlay: {
                errors: true,
                warnings: true,
            },
        },
    },
    devtool: 'eval-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
