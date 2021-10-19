/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Descripttion:
 * @Author: wjt12933
 * @Date: 2020-11-24 14:34:34
 */
const bodyParser = require("body-parser");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  publicPath: process.env.VUE_APP_PROJECT_PATH,
  productionSourceMap: false,
  configureWebpack: {},
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#00C1DE"
          },
          javascriptEnabled: true
        }
      }
    }
  },

  //修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = process.env.VUE_APP_PROJECT_NAME;
      return args;
    });
    // config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,

    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();

    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/icons")) //处理svg目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
  }
};
