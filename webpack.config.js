module.exports = {
    mode: 'production',
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
