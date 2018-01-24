const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch', // RHL patch
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    './client/src/index.js',
  ],
  output: {
    // path: `${__dirname}/../public`,
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })),
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // name: '[name].[ext]'
            },
          },
        ],
      },
    ],
  },
};
