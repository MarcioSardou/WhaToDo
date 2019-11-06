// const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'main.js'
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
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
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
      filename:'public/index.html'
     })
   ]
}

//ENTRY NÃO É MAIS NECESSÁRIO A PARTIR DA V4, POIS ELE PROCURA UMA PAST SRC E UM ARQUIVO INDEX.JS DENTRO DELA
// },