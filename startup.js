require('es6-shim');
require('es6-spread');
require('enhanced-require')(module, {
  recursive: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
      { test: /\.json$/, loader: 'json-loader' },
    ],
    hot: true,
    watch: true
  }
})("./server");
