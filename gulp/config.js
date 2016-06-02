var dest = './www';
var src = './src';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  dest: dest,

  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },

  webpack: {
    entry: src + '/js/app.js',
    output: {
      publicPath: '/www/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    cache: true,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel?cacheDirectory=true'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
        },
        {
          test: /\.png$/,
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.jpg$/,
          loader: 'url-loader?mimetype=image/jpg'
        },
        {
          test: /\.svg$/,
          loader: 'file?name=../assets/images/[name].[ext]',
        },
      ]
    },
    plugins: [
      new ExtractTextPlugin('../assets/css/style.css', { allChunks: true }),
      new webpack.ProvidePlugin({
        'React': 'react',
        'ReactDOM': 'react-dom',
        'CSSModules': 'react-css-modules',
      }),
    ],
    externals: {
    }
  }
}
