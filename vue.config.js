/* eslint-disable no-undef */
// 支持导入node模块
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const rootValue = {
  mobile: 37.5,
  pc: 144
}


// 官网配置参考   https://cli.vuejs.org/zh/config/
module.exports = {
  // baseUrl, 从 Vue CLI 3.3 起已弃用，请使用publicPath。
  // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
  // 例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
  // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
  //  但是，使用下面情况不应该使用相对路径：
  // 1 当使用基于 HTML5 history.pushState 的路由时；
  // 2 当使用 pages 选项构建多页面应用时。
  // publicPath: './',
  // 这个值在开发环境下同样生效。如果你想把开发服务器架设在根路径，你可以使用一个条件式的值：
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  outputDir: 'dist', // 打包的目录,默认是dist
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  lintOnSave: false, // 在保存时校验格式
  // 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
  productionSourceMap: false, // 默认值true，生产环境是否生成 SourceMap
  // map文件的作用是就是辅助我调试用的，正式站其实作用不大，而且处于安全考虑（有map可以看到源码），可以直接干掉。
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建，以及减少包的大小。
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    // host: '127.0.0.1', // 即localhost,但是不修改控制台会一直有wds disconnected报错
    port: 8888, // 开发阶段的默认端口
    https: false,
    hotOnly: false
    // 设置代理
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.0.102:8888/',
    //     // target: 'http://127.0.0.1:8888',
    //     // ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    //   // '/foo': {
    //   //   target: '<other_url>'
    //   // }
    // }

    // 支持所有 webpack-dev-server 的选项
    // before: app => { }
  },
  // crossorigin: '',
  // 在HTML5中，一些 HTML 元素提供了对 CORS 的支持，
  //  例如 <audio>、<img>、<link>、<script> 和 <video> 均有一个跨域属性 (crossOrigin property)，它允许你配置元素获取数据的 CORS 请求。
  // https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes
  // 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。

  // 插件配置，用来传递任何第三方插件选项
  // pluginOptions: {
  //   foo: {
  //     // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
  //   }
  // }

  // webpack配置
  // configureWebpack: {
  //   plugins: [
  //     new MyAwesomeWebpackPlugin()
  //   ]
  // },
  // chainWebpack:{},

  // css配置
  // css: {
  //   // cssMap默认为false
  //   // sourceMap: false,
  //   requireModuleExtension: true,// 默认值true
  //   // 从 v4 起已弃用，请使用css.requireModuleExtension替代css.modules
  //   // 在 v3 中，这个选项含义与 css.requireModuleExtension 相反。
  //   // 如果你在 css.loaderOptions.css 里配置了自定义的 CSS Module 选项，则 css.requireModuleExtension 必须被显式地指定为 true 或者 false
  //   loaderOptions: {
  //     css: {
  //       // 这里的选项会传递给 css-loader
  //     },
  //     postcss: {
  //       // 这里的选项会传递给 postcss-loader
  //     }
  //   },
  // }

  // 配置rem适配插件
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         // autoprefixer({
  //         //   // browsers: ['Android >= 4.0', 'iOS >= 8', 'last 10 Chrome versions', 'last 5 Firefox versions', 'ie>= 9']
  //         // }),
  //         pxtorem({
  //           rootValue: rootValue.pc,
  //           // 基准值(计算公式：设计图宽度/10)，设计图尺寸为750X1134(iPhone6)，基准值为750/10=75
  //           /*
  //           ps： 
  //             之所以设为37.5，是为了引用像mint-ui这样的第三方UI框架，
  //             因为第三方框架没有兼容px2rem ，将remUnit的值设置为设计图宽度（这里为750px）75的一半，
  //             即可以1:1还原mint-ui的组件，否则会样式会有变化，例如按钮会变小。
  //             既然设置成了37.5 那么我们必须在写样式时，也将值改为设计图的一半。
  //           */
  //           propList: ['*'],
  //           // propList: ['*', '!border*'],
  //           mediaQuery: true //（布尔值）是否允许在媒体查询中转换px,默认false。
  //           // 可以从px更改为rem的属性，*表示所有css属性的px都转rem
  //           // 忽略px不转换为rem
  //           // selectorBlackList: ['.ig']   // 要忽略的px不转换rem选择器，不转换   .ig - 表示.ig - 开头的都不会转换
  //           // 或者使用 `Px` or `PX` is ignored by `postcss-pxtorem` but still accepted by browsers,如border
  //         })
  //       ]
  //     }
  //   }
  // }
};
