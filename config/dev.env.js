/**
 * 开发环境配置
 */
'use strict'
const merge = require('webpack-merge')
const baseEnv = require('./base.env')

module.exports = merge(baseEnv, {
  NODE_ENV: '"development"',
  CONFIG: {

    host: 'localhost', //开发对应IP
    port: 9000, //开发对应端口号

    proxyTable: {},

    autoOpenBrowser: false, //自动开启浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    useEslint: true,//esLint启用（代码静态检查器）
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true,

    //静态资源相对路径
    assetsPublicPath: '/',

  }
})
