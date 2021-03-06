const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin')

const mode = (process.env.NODE_ENV === 'production') ? 'production' : 'development';

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'assets', 'index.html'),
    }),
    new workboxPlugin.InjectManifest({
      swSrc: './src/sw.js',
      swDest: 'sw.js',
    })
  ],
  mode,
};