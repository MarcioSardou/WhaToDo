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
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      }
    ]
  },
    devServer: {
    contentBase: ['./public'],
    watchContentBase: true
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
