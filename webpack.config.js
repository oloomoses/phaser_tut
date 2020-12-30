const path = require('path');
const copyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new copyPlugin({
      patterns: [
        { from: './src/assets', to: 'assets' }
      ]
    })
  ]
};