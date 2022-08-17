const imageExtensions = /\.(bmp|gif|jpg|jpeg|png|svg)$/;
const audioExtensions = /\.(mp3|wav|ogg)$/;

export default {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: imageExtensions,
        type: 'asset/resource',
      },
      {
        test: audioExtensions,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};
