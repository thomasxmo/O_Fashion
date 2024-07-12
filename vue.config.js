// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,

// });

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  configureWebpack: {
    // plugins: [new BundleAnalyzerPlugin()],
    performance: {
      maxEntrypointSize: 51200000, // Increase the size limit
      maxAssetSize: 51200000,
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
};
