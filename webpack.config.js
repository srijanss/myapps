const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/es6/index.js',
    print: './src/es6/print.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src/static/js'),
  },
}
