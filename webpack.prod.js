const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({ // 某些库在prod下有特定优化
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})