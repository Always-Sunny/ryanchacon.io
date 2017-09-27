var path = require("path");
var webpack = require("webpack");

//use export default if
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
  //to get file-loader to work, you have to reconfigure the module loaders
  //go to the images and delete them
  //remake module:{} by pytting file loader first, then babel-loader, then scss
  //then add the img component back and it should work
   rules: [
     {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
     {
       test: /\.(png|jpg|gif)$/,
       use: [
         {
           loader: 'file-loader',
           options: {}
         }
       ]
     },
     {
       test: /\.scss$/,
       use: [
         { loader: "style-loader" },// creates style nodes from JS strings
         { loader: "css-loader" }, // translates CSS into CommonJS
         { loader: "sass-loader"} // compiles Sass to CSS
       ]
     }
   ]
  }
};
