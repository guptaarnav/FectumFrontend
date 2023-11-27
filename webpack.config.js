const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config().parsed;

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    open: true, // Automatically opens the browser
    historyApiFallback: true, // Allows the use of the "back" button to handle the routing correctly
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // Path to your index.html
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv) // it will automatically pick up key values from .env file
    })
  ],
};
