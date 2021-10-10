const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PwaManifestPlugin = require('webpack-pwa-manifest');
const {
  WebpackManifestPlugin: AssetManifestPlugin,
} = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.svg',
      filename: './index.html',
    }),
    // TODO: Update configurable info for ManifestPlugin
    // Serves the manifest.json file
    new PwaManifestPlugin({
      filename: 'manifest.json',
      name: 'Your App Name Here',
      short_name: 'App Name',
      description: 'An amazing TeachLA React Website :D',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: path.resolve('./public/favicon512.png'),
          sizes: [192, 512], // multiple sizes
        },
        {
          src: path.resolve('./public/favicon.svg'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
      fingerprints: false,
    }),
    // Serves a file `./asset-manifest.json` which indicates all the asset paths
    new AssetManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new CleanWebpackPlugin(),
  ],
};
