/* eslint-disable */
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin"); // gzip压缩
const WebpackCdnPlugin = require("webpack-cdn-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// 网站配置
const configSite = require("./config/index.js");
// CDN配置
const cdnConfig = require("./config/cdn.js");

let isProd = process.env.NODE_ENV == "production" ? true : false;
module.exports = {
  lintOnSave: true, // eslint检测 按需开启
  // 资源全局路径前缀
  // publicPath: isProd
  //   ? "https://cdntest-1251804846.cos.accelerate.myqcloud.com" // 部署到自己单独的CDN服务器
  //   : "./", // 无特殊需要设置成./
  publicPath: "./",
  assetsDir: "assets", //静态资源目录(js,css,img,fonts)这些文件都可以写里面
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 输出文件目录
  outputDir: "dist",
  // webpack-dev-server 相关配置
  devServer: {
    // 设置主机地址
    host: "0.0.0.0",
    // 设置默认端口
    port: 8088,
    // 禁用host验证
    disableHostCheck: true,
    // 设置代理
    proxy: {
      "/api": {
        // 目标 API 地址
        // 开发环境
        // target: "http://127.0.0.1:7001/api", // 后端测试api地址
        // target: 'http://rap2.taobao.org:38080/app/mock/261254', // 记得删除这行
        target: '',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL(设置跨域)
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  configureWebpack() {
    const timeStamp = new Date().getTime();
    const configNew = {
      // output: {
      //   filename: `[name].${timeStamp}.js`,
      //   chunkFilename: `[name].${timeStamp}.js`
      // },
      plugins: [
        // CDN导入, 如果不需要cdn加速，注释下面代码就可以
        new WebpackCdnPlugin(cdnConfig),
      ],
    };
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      console.log("\n---生产环境---\n");
      console.log(`gzip压缩(需要nginx开启gzip)`);
      configNew.plugins.push(
        new CompressionPlugin({
          // filename: "[path].gz[query]",
          // algorithm: "gzip",
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        })
      );
    }
    return configNew;
  },
  chainWebpack(config) {
    // 移除资源预加载(路由懒加载才能正常使用)
    config.plugins.delete("preload"); // TODO: need test
    config.plugins.delete("prefetch"); // TODO: need test
    // 配置CDN
    // config.plugin('html').tap(args => {
    //   args[0].cdn = require('./config/cdn')
    //   args[0].title = configSite.title
    //   args[0].inject = true  // 是否自动注入资源文件
    //   return args
    // })
    // 为CND设置导出模块名称
    // config.externals(externals)
    // 设置别名
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      // .set("_c", resolve("src/components"))
      // .set("_conf", resolve("config"));
    // 设置 svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': '#111',
            // 'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径
            hack: `true; @import "@/assets/css/theme-var.less";`,
          },
        },
      },
      sass: {
        // 配置scss 全局样式文件 支持全局变量
        prependData: `
       @import "@/assets/css/common.scss";
     `,
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          // 由于vw方案得到更多浏览器的兼容,rem 方案暂时废弃(跟js耦合性太高，并且在ssr渲染中体验度也不好)
          // require("postcss-plugin-px2rem")({
          //   rootValue: 75, // 换算基数(设计稿宽度/10)
          //   // unitPrecision: 5, //允许REM单位增长到的十进制数字。
          //   //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
          //   // propBlackList: [], //黑名单
          //   exclude: /(node_modules)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
          //   selectorBlackList: [".bottom-view-wrapper", ".custom-map"], //要忽略并保留为px的选择器
          //   // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
          //   // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
          //   mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
          //   minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
          // }),
          // px 转vw
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',  // 需要转换的单位，默认为"px"
            viewportWidth: 750, //  设计稿的视口宽度
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ['*'], // 能转化为vw的属性列表
            viewportUnit: 'vw', //  希望使用的视口单位
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: [".bottom-view-wrapper", ".custom-map"], // 需要忽略的CSS选择器
            minPixelValue: 1, // 最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            replace: true, // 是否直接更换属性值，而不添加备用属性
            exclude: /node_modules/, // 忽略某些文件夹下的文件或特定文件
            include: undefined,  // 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: 'vw', // 横屏时使用的单位
            landscapeWidth: 568 // 横屏时使用的视口宽度
          })
        ],
      },
    },
  },
  // 第三方插件配置
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
};
