const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './client/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    publicPath: '/dist/',
    port: 3000,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api', '/auth'],
        target: 'http://localhost:9000'
      }
    ]
  }
};
