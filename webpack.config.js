const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './style/script.js', // Your main JS file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle name
  },
  stats: {
    children: true,
  },
  // ... other configurations
  module: {
    rules: [
      // ... other rules
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // ... other rules
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Path to your HTML file
      filename: 'index.html', // Output HTML filename
    }),
    // ... other plugins
  ],
};
