const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');
module.exports = {
    mode: 'production',

    plugins: [
        new CompressionPlugin({
            compressionOptions: {
                numiterations: 15,
            },
            algorithm(input, compressionOptions, callback) {
                return zopfli.gzip(input, compressionOptions, callback);
            },
        }),
    ],

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 10000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 7,
            maxInitialRequests: 5,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },


    },

};
