const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // to be splitted
  entry: ['webpack-hot-middleware/client', path.resolve(__dirname, '..', 'src/client/index.jsx')],
  devtool: 'inline-source-map', // to be splitted
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Groceriffic App',
      template: path.resolve(__dirname, '..', 'src/client/index.html'),
    }),
    new CleanWebpackPlugin(['build/client']),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'build/client'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.m?jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
};
