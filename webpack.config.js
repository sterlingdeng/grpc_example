const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  devServer: {
    contentBase: path.resolve(__dirname),
    publicPath: '/build/',
    proxy: {},
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/preset-react']
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
