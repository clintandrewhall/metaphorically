
require('enhanced-require')(module, {
  recursive: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  }
})("./server");
