import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  // debug: true,
  devtool: 'source-map',
  // noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    // Hash the files using MD5 so their names change when the content changes.
    new WebpackMd5Hash(),

    // Use CommonsChuckPlugin to create a separate bundle
    // of vendor libraries so that they're cached seperately
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    //Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,

      // Properties defined here are available in index.html
      // using htmlWebpackPlugin.options.varName
      trackJSToken: '6cb80c3ce3e9443e937a7917488c86f1'
    }),

    //Minify JS
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      }
    })
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        // loaders: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "/dist"
        })
      }
    ]
  }
};
