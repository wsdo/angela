// const path = require('path');
// const merge = require('webpack-merge');
// const config = require('./webpack.config.base.js');
// const paths = require('./paths');
// const clientConfig = {
//   mode: 'development',
//   entry: paths.appIndexJs,
//   output: {
//     filename: 'index.js',
//     path: path.resolve(__dirname, 'public')
//   }
// };

// module.exports = merge(config, clientConfig);


const path = require('path')
const paths = require('./paths');
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')
const isDev = process.env.NODE_ENV === 'development'
const webpackMerge = require('webpack-merge')
const HTMLPlugin = require('html-webpack-plugin')

const config = webpackMerge(baseConfig, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  entry: {
    app: paths.appIndexJs
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../src/index.html')
    })
  ]
})

// const config = {
//   entry: {
//     app: path.join(__dirname, '../client/app.js')
//   },
//   output: {
//     filename: '[name].[hash].js',
//     path: path.join(__dirname, '../dist'),
//     publicPath: '/public/'
//   },
//   module: {
//     rules: [
//       {
//         test: /.jsx$/,
//         loader: 'babel-loader'
//       },
//       {
//         test: /.js$/,
//         loader: 'babel-loader',
//         exclude: [
//           path.join(__dirname, '../node_modules')
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new HTMLPlugin({
//       template: path.join(__dirname, '../client/template.html')
//     })
//   ]
// }

if (isDev) {
  // config.entry = {
  //   app: [
  //     'react-hot-loader/patch',
  //     path.join(__dirname, '../client/app.js')
  //   ]
  // }
  config.devServer = {
    host: '127.0.0.1',
    port: '3005',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    // 显示黑色的弹窗
    overlay: {
      error: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
