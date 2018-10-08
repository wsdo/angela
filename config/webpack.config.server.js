const path = require('path');
const nodeExternals = require('webpack-node-externals');
const paths = require('./paths');
module.exports = {
  target: 'node',
  mode: 'development',
  entry: paths.appIndexJs,
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, paths.appBuild)
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react', 'stage-0', ['env', {
          targets: {
            browsers: ['last 2 versions']
          }
        }]]
      }
    }]
  }
}
