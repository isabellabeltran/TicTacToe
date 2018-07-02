const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
//^^^ this will automatically save and reload HTML changes it replaces the file and extract loader for the hTML

/**
 * PRESET ENV 
  We can add features one a time with plugins so we don't include the whole library
  Or we can use presets to include all the features of a particular year or particular way of working
  THE PRESET THAT WORKS THE BEST IN MOST SITUATIONS IS ENV (THIS IS ON BABELRC)
  IT takes two parameters "env" and an object of options 
 */

module.exports = {
  entry: {
    main: ["babel-polyfill", "./src/main.js"]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    //Hot true is for replacing the dev server for an express server 
    hot: true,
    //For the terminal colors like the regular webpack 
    historyApiFallback: true,
    stats: {
      colors: true 
    }
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              //Images folder in the src directory 
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //to add the express server 
    new webpack.HotModuleReplacementPlugin(), 
    new HTMLWebpackPlugin({
      template: "src/index.html"
      //^^^ Wherever the HTML LIVES 
    }) 
  ]
}