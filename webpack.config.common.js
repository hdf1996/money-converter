const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '/dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Conversor de monedas!',
      template: './src/index.html'
    }),
    new WebpackPwaManifest({
      name: 'Money Converter',
      short_name: 'money-converter',
      description: 'A cool money converter!',
      background_color: '#00c6ff',
      theme_color: '#00c6ff',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};

module.exports = config;
