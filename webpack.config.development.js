const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');

const config = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;
