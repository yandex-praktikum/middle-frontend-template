import common from './common.config';
import path from 'path';
import webpack, { HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const imageExtensions = /\.(bmp|gif|jpg|jpeg|png|svg)$/;
const audioExtensions = /\.(mp3|wav|ogg)$/;

const isDev = process.env.NODE_ENV === 'development';
const ROOT_DIR = isDev ? path.resolve(__dirname, '../../../') : path.resolve(__dirname, '../../');

export default {
  ...common,
  entry: [
    isDev && '@gatsbyjs/webpack-hot-middleware/client?path=/__webpack_hmr',
    path.join(ROOT_DIR, './client/index.tsx')
  ].filter(Boolean),
  target: 'web',
  output: {
    path: path.join(ROOT_DIR, './public'),
    filename: 'app.client.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              "@babel/preset-react"
            ],
            plugins: [
              isDev && 'react-refresh/babel'
            ].filter(Boolean)
          },
        }
      },
      {
        test: imageExtensions,
        type: 'asset/resource',
      },
      {
        test: audioExtensions,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    isDev && new HotModuleReplacementPlugin(),
    isDev && new ReactRefreshPlugin({
      overlay: {
        sockIntegration: 'whm',
      },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './assets/sw.js' }],
    }),
  ].filter(Boolean)
} as webpack.Configuration;
