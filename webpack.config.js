var path = require('path');
require('node-jsx').install({extension: '.jsx'});

module.exports = {
  cache: true,
  entry: './src/components/index.jsx',
  output: {
    path: path.join(__dirname, 'dist', 'scripts'),
    publicPath: 'bundle/',
    filename: 'bundle.js'
  },
  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!less' },
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
    ]
  },
  plugins: []
};
