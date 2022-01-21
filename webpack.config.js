const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
              // eslint options (if necessary)
            },
        },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
