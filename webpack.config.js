var path = require("path");
var webpack = require("webpack");


export default {
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
         test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: 'url'
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
