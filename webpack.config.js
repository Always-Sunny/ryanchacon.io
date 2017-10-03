import webpack from 'webpack';
import path from 'path';

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
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},

      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },// creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "sass-loader"} // compiles Sass to CSS
        ]
      },
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
