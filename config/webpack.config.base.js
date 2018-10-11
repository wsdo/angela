const path = require('path')
const paths = require('./paths');

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(paths.appSrc),
      'node_modules',
    ],
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /.(js|jsx)$/,
      //   loader: 'eslint-loader',
      //   exclude: [
      //     path.resolve(__dirname, '../node_modules')
      //   ]
      // },
      {
        test: /.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules'),
        ],
      },
    ],
  },
}
