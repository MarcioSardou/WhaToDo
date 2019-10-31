const path = require('path');


module.exports = {
    entry: {
        app:'./src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './bundle.js',
    },
    devServer: {
      publicPath: "/",
      contentBase: "./public",
      hot: true
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader:'babel-loader',
              }
            },
            {
              test: /\.css$/,
              use: {
                loader:['style-loader','css-loader']
              }
            },
            {
              test: /\.scss$/,
              use: {
                loader:'sass-loader',
              }
            }
            
        ]
    }
}