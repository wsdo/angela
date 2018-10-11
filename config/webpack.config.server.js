// const path = require('path');
// const nodeExternals = require('webpack-node-externals');
// const paths = require('./paths');

// module.exports = {
//   target: 'node',
//   mode: 'development',
//   entry: paths.appServerJs,
//   output: {
//     filename: './bundle.js',
//     path: path.resolve(__dirname, paths.appBuild),
//   },
//   externals: [nodeExternals()],
//   module: {
//     rules: [{
//       test: /\.js?$/,
//       loader: 'babel-loader',
//       exclude: /node_modules/,
//       options: {
//         presets: ['react', 'stage-0', ['env', {
//           targets: {
//             browsers: ['last 2 versions'],
//           },
//         }]],
//       },
//     }],
//   },
// }
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const paths = require('./paths');
const config = require('./webpack.config.base.js');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: paths.appServerJs,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, paths.appBuild),
  },
  externals: [nodeExternals()],
};

module.exports = merge(config, serverConfig);
