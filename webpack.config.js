const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    'react-hot-loader/patch', // RHL patch
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: "/",
    filename: 'bundle.js'
  },
  target: 'web',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css')
  ],
  module: {
   rules: [
     {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
     {
      test: /\.scss$/,
      use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })),
    },
    //  {
    //     test: /\.scss$/,
    //     use: ExtractTextPlugin.extract({
    //       fallback: 'style-loader',
    //       //resolve-url-loader may be chained before sass-loader if necessary
    //       use: ['css-loader', 'sass-loader']
    //     })
    //   },

    //  {
    //    test: /\.scss$/,
    //    use: [
    //      { loader: "style-loader" },// creates style nodes from JS strings
    //      { loader: "css-loader" }, // translates CSS into CommonJS
    //      { loader: "sass-loader"} // compiles Sass to CSS
    //    ]
    //  },
     {
       test: /\.(png|jpg|gif)$/,
       use: [
         {
           loader: 'file-loader',
           options: {}
         }
       ]
     }
   ]
  }
};
