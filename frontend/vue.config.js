// 'use strict'
// const path = require('path')
// const webpack = require('webpack')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// //dataroom--------------------------------------
// const publicPath = process.env.VUE_APP_HISTORY === 'y' ? process.env.VUE_APP_BASE + '/' : ''
// const JS_CDN = [
//   publicPath + 'static/libs/vuex/vuex.min.js',
//   publicPath + 'static/libs/vue-router/vue-router.min.js'
// ]
// const CSS_CDN = []
 
// const cdn = {
//   css: CSS_CDN,
//   js: JS_CDN
// }
// //dataroom----------------------------------
// const CompressionPlugin = require('compression-webpack-plugin')

// const name = process.env.VUE_APP_TITLE || 'SiWU-IoT-VIEWS' // 网页标题

// const port = process.env.port || process.env.npm_config_port || 80 // 端口

// // vue.config.js 配置说明
// //官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// // 这里只列一部分，具体配置参考文档
// module.exports = {
 
//   pages: {
//     index: {
//       entry: ['src/main.js'],
//       template: 'public/index.html',
//       filename: 'index.html',
//       chunks: 'all'
//     }
//   },
//   // 部署生产环境和开发环境下的URL。
//   // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
//   // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
//   publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
//   // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
//   outputDir: 'dist',
//   // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
//   assetsDir: 'static',
//   // 是否开启eslint保存检测，有效值：ture | false | 'error'
//   lintOnSave: process.env.NODE_ENV === 'development',
//   // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
//   productionSourceMap: false,
//   transpileDependencies: ['quill','@antv/*'],
//   // webpack-dev-server 相关配置
//   devServer: {
//     host: '0.0.0.0',
//     port: port,
//     open: true,
//     proxy: {
//       // detail: https://cli.vuejs.org/config/#devserver-proxy
//       [process.env.VUE_APP_BASE_API]: {
//         target: `http://localhost:9712`,
//         changeOrigin: true,
//         pathRewrite: {
//           ['^' + process.env.VUE_APP_BASE_API]: ''
//         }
//       }
//     },
//     disableHostCheck: true
//   },
//   css: {
//     loaderOptions: {
//       sass: {
//         sassOptions: { outputStyle: "expanded" }
//       }
//     }
//   },
//   configureWebpack: {
//     name: name,
//     resolve: {
//       extensions: ['.js', '.vue', '.json', '.mjs'], // 支持 .mjs 文件
//       alias: {
//         '@': resolve('src'),
//         vue$: 'vue/dist/vue.common',
//         // 大屏工程路径别名
//         'data-room-ui': resolve('packages'),
//         '@gcpaas/data-room-ui': resolve('packages/index.js')
//       }
//     },
//     module: {
//       rules: [
//         {
//           test: /\.m?js$/,
//           exclude: /(node_modules|bower_components)/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env']
//             }
//           }
//         }
//       ]
//     },
//     plugins: [
//       // http://doc.ruoyi.vip/ruoyi-vue/other/faq.html#使用gzip解压缩静态文件
//       new CompressionPlugin({
//         cache: false,                                  // 不启用文件缓存
//         test: /\.(js|css|html|jpe?g|png|gif|svg)?$/i,  // 压缩文件格式
//         filename: '[path][base].gz[query]',            // 压缩后的文件名
//         algorithm: 'gzip',                             // 使用gzip压缩
//         minRatio: 0.8,                                 // 压缩比例，小于 80% 的文件不会被压缩
//         deleteOriginalAssets: false                    // 压缩后删除原文件
//       }),
//       new webpack.ProvidePlugin({
//         jQuery: 'jquery',
//         $: 'jquery',
//         'windows.jQuery': 'jquery'
//       }),
//     ],
//   },
//   chainWebpack(config) {

//     config.plugins.delete('preload') // TODO: need test
//     config.plugins.delete('prefetch') // TODO: need test

//     // set svg-sprite-loader
//     config.module
//       .rule('svg')
//       .exclude.add(resolve('src/assets/icons'))
//       .add(resolve('packages/assets/images/dataSourceIcon/svg'))
//       .add(resolve('packages/assets/images/pageIcon/svg'))
//       .add(resolve('packages/assets/images/bigScreenIcon/svg'))
//       .add(resolve('packages/Svgs/svg'))
//       .add(resolve('packages/assets/images/alignIcon/svg'))
//       .end()
//     config.module
//       .rule('icons')
//       .test(/\.svg$/)
//       .include.add(resolve('src/assets/icons'))
//       .add(resolve('packages/assets/images/dataSourceIcon/svg'))
//       .add(resolve('packages/assets/images/pageIcon/svg'))
//       .add(resolve('packages/assets/images/bigScreenIcon/svg'))
//       .add(resolve('packages/Svgs/svg'))
//       .add(resolve('packages/assets/images/alignIcon/svg'))
//       .end()
//       .use('svg-sprite-loader')
//       .loader('svg-sprite-loader')
//       .options({
//         symbolId: 'icon-[name]'
//       })
//       .end()

//     config.when(process.env.NODE_ENV !== 'development', config => {
//       config
//         .plugin('ScriptExtHtmlWebpackPlugin')
//         .after('html')
//         .use('script-ext-html-webpack-plugin', [{
//           // `runtime` must same as runtimeChunk name. default is `runtime`
//           inline: /runtime\..*\.js$/
//         }])
//         .end()

//       config.optimization.splitChunks({
//         chunks: 'all',
//         cacheGroups: {
//           libs: {
//             name: 'chunk-libs',
//             test: /[\\/]node_modules[\\/]/,
//             priority: 10,
//             chunks: 'initial' // only package third parties that are initially dependent
//           },
//           elementUI: {
//             name: 'chunk-elementUI', // split elementUI into a single package
//             test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
//             priority: 20 // the weight needs to be larger than libs and app or it will be packaged into libs or app
//           },
//           commons: {
//             name: 'chunk-commons',
//             test: resolve('src/components'), // can customize your rules
//             minChunks: 3, //  minimum common number
//             priority: 5,
//             reuseExistingChunk: true
//           }
//         },

//       })
//       config.optimization.runtimeChunk('single')
//     })
//   }
// }
'use strict'
const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const publicPath = process.env.VUE_APP_HISTORY === 'y' ? process.env.VUE_APP_BASE + '/' : ''
const JS_CDN = [
  publicPath + 'static/libs/vuex/vuex.min.js',
  publicPath + 'static/libs/vue-router/vue-router.min.js'
]
const CSS_CDN = []

const cdn = {
  css: CSS_CDN,
  js: JS_CDN
}

const name = process.env.VUE_APP_TITLE || 'SiWU-IoT-VIEWS'
const port = process.env.port || process.env.npm_config_port || 80

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  transpileDependencies: ['quill', '@antv/*'],
  devServer: {
    host: '0.0.0.0',
    port: port,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:9712`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: "expanded" }
      }
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      extensions: ['.js', '.vue', '.json', '.mjs'], // 支持 .mjs 文件
      alias: {
        '@': resolve('src'),
        vue$: 'vue/dist/vue.common',
        'data-room-ui': resolve('packages'),
        '@gcpaas/data-room-ui': resolve('packages/index.js')
      }
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.mjs$/,
          type: "javascript/auto", // 确保 Webpack 正确解析 .mjs 文件
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new CompressionPlugin({
        cache: false,
        test: /\.(js|css|html|jpe?g|png|gif|svg)?$/i,
        filename: '[path][base].gz[query]',
        algorithm: 'gzip',
        minRatio: 0.8,
        deleteOriginalAssets: false
      }),
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .add(resolve('packages/assets/images/dataSourceIcon/svg'))
      .add(resolve('packages/assets/images/pageIcon/svg'))
      .add(resolve('packages/assets/images/bigScreenIcon/svg'))
      .add(resolve('packages/Svgs/svg'))
      .add(resolve('packages/assets/images/alignIcon/svg'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .add(resolve('packages/assets/images/dataSourceIcon/svg'))
      .add(resolve('packages/assets/images/pageIcon/svg'))
      .add(resolve('packages/assets/images/bigScreenIcon/svg'))
      .add(resolve('packages/Svgs/svg'))
      .add(resolve('packages/assets/images/alignIcon/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [{
          inline: /runtime\..*\.js$/
        }])
        .end()

      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          },
          elementUI: {
            name: 'chunk-elementUI',
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
            priority: 20
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
