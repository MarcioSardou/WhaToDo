// const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist')
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      }
    ]
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname, 'public/index.html'),
      hash: true
    })
  ]
}



// devServer: {
//   publicPath: "/",
//   contentBase: "./public",
//   hot: true
//ENTRY NÃO É MAIS NECESSÁRIO A PARTIR DA V4, POIS ELE PROCURA UMA PAST SRC E UM ARQUIVO INDEX.JS DENTRO DELA
// },