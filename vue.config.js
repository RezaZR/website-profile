module.exports = {
  // css: {
  //   requireModuleExtension: true,
  // },
  assetsDir: "assets/",
  publicPath: "/", // Base directory for dev
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("fonts")
      .test(/\.(ttf|otf|eot|woff|woff2)$/)
      .use("file-loader")
      .loader("file-loader")
      .tap(options => {
        options = {
          // limit: 10000,
          name: "/assets/fonts/[name].[ext]"
        };
        return options;
      })
      .end();
  }
};
