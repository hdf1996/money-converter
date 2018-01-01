const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

const config = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new WorkboxPlugin({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
});

module.exports = config;
