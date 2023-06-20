const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename:'[name][ext]'
  },
  devtool:'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback:true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:{importLoaders:1}
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type:'asset/resource'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lime Life',
      filename: 'index.html',
      template:'src/pages/index.html'
    }),
      new HtmlWebpackPlugin(
    {
      title: 'Product List',
      filename: 'product_list.html',
      template: 'src/pages/product_list.html'
        }),
      new HtmlWebpackPlugin(
    {
      title: 'Demo',
      filename: 'my_demo.html',
      template: 'src/pages/my_demo.html'
      }),
    
   ]
}