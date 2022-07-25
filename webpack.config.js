const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: './script.js',
  target: ["web", "es5"],
  output: {
    path: path.resolve(__dirname, 'docs'), 
    filename: '[fullhash].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "index.html")
  }),
  new MiniCssExtractPlugin(),],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};