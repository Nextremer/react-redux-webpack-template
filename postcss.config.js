module.exports = {
  plugins: [
    require('postcss-import')({
      addDependencyTo: require('webpack'),
    }),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-color-hex-alpha'),
    require('autoprefixer')({
      browsers: ['last 2 versions'],
    }),
  ]
};

