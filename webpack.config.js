const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* eslint global-require: 0 */
module.exports = {
  context: path.join(__dirname, '/src'),
  entry: [
    'babel-polyfill',
    './js/index.js',
  ],
  output: {
    path: path.join(__dirname, '/www/js'),
    publicPath: '/js/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.join(__dirname, '/src/js'),
      'node_modules',
    ],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?mimetype=image/jpg',
      },
      {
        test: /\.svg$/,
        loader: 'file?name=../assets/images/[name].[ext]',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: '../assets/css/style.css', allChunks: true }),
  ],
};

